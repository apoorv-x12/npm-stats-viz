import {
  useQuery,
 // useQueryClient,
} from '@tanstack/react-query'
import { getMetaNpm , getTotalDownloadsInPeriod} from '../ApiService'
import { format } from 'date-fns'
import Loader from './ui/loader'
import TotalCard from './TotalCard'
import { useToast } from './ui/use-toast'
import { useEffect } from 'react'


type Props = {
  name : string
  setName? : React.Dispatch<React.SetStateAction<string>>
}

const NpmLifeTotal = (props: Props) => {

    const { toast } = useToast()

  //const queryClient = useQueryClient()
console.log('pn',props.name)
    const metaDataQuery = useQuery({
    queryKey: ['metaData',props.name],
    queryFn: () => getMetaNpm(props.name), // Replace with your actual function n
  });

  // Format today's date as 'yyyy-MM-dd'
  const today = new Date();
  const todayDateString = format(today, 'yyyy-MM-dd');

  // Query to fetch total downloads in the lifetime of the package
  const totalDownloadsQuery = useQuery({
    queryKey: ['totalDownloads',props.name, metaDataQuery?.data?.time?.created.split("T")[0]],
    queryFn: () => getTotalDownloadsInPeriod(`${metaDataQuery?.data?.time?.created.split("T")[0]}:${todayDateString}`,props.name), // Replace with your actual function
    enabled: !!metaDataQuery?.data?.time?.created, // Enable the query only when created date is available
  });

  //  console.log(totalDownloadsQuery.data,'ds', metaDataQuery?.data?.time?.created)
  useEffect(() => {

    if(!metaDataQuery?.isLoading && !totalDownloadsQuery?.isLoading){

      if(!metaDataQuery?.isError && !totalDownloadsQuery?.isError){
        toast({
          title: 'Success',
          description: 'Data fetched successfully',
          variant: 'success',
          duration: 6000,
        })
      }
      else{
        toast({
           title: 'Error',
           description: 'Error fetching data',
           variant: 'destructive',
           duration: 6000
          })
      }
    } 
  },
  [metaDataQuery?.isLoading,metaDataQuery?.isError,
   totalDownloadsQuery?.isLoading ,totalDownloadsQuery?.isError,toast])


  if (metaDataQuery.isLoading || totalDownloadsQuery.isLoading) {
    return <div className="w-full h-1/5 flex justify-center items-center">
            <Loader/>
           </div>; // Show loading indicator while fetching data
  }

  // Handling error state
  if (metaDataQuery.isError || totalDownloadsQuery.isError) {
    const errorMessage = metaDataQuery.isError ? metaDataQuery?.error?.message : totalDownloadsQuery?.error?.message
    return <div className="text-red-500 flex flex-col items-center">
              Error: {errorMessage}
            <div>
              Probably the typed package name doesn't exist, Give an existing package name and try again!
            </div>
           </div> 
  }

  return (
    <>
    <div>
      <TotalCard name={totalDownloadsQuery?.data?.package}
        createdOn={metaDataQuery?.data?.time?.created.split("T")[0]}
        totalDownloads={totalDownloadsQuery?.data?.downloads}
        downloadsEndDate={totalDownloadsQuery?.data?.end}
        downloadsStartDate={totalDownloadsQuery?.data?.start}
       />
    </div>
    </>
  )
}

export default NpmLifeTotal