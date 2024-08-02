import { useQuery } from "@tanstack/react-query"
import { getComparedDownloads } from "../ApiService"
import Loader from "./ui/loader"
import BarChart from "./BarChart"

type PropType = {
    packagesNameString: string
}

const ComparePackages = (props: PropType) => {
   
    const compareYearQuery= useQuery(
        {
        queryKey: ['compareYear',props?.packagesNameString],
        queryFn: () => getComparedDownloads(props?.packagesNameString,'last-year'),
    })
    const compareDayQuery= useQuery(
        {
        queryKey: ['compareDay',props?.packagesNameString],
        queryFn: () => getComparedDownloads(props?.packagesNameString,"last-day"),
    })
    const compareMonthQuery= useQuery(
        {
        queryKey: ['compareMonth',props?.packagesNameString],
        queryFn: () => getComparedDownloads(props?.packagesNameString,"last-month"),
    })
    
    const packages= props?.packagesNameString.split(",")
    const dataCreator = (name:string): {name:string,package_A:number,package_B:number}[] => {
       
       
       const ob= {
        name:name,
        package_A:0,
        package_B:0,
       }
       if(name==='last-day'){
        ob.package_A=compareDayQuery?.data?.[packages?.[0]]?.downloads || 0
        ob.package_B=compareDayQuery?.data?.[packages?.[1]]?.downloads || 0
       }
       else if(name==='last-month'){
        ob.package_A=compareMonthQuery?.data?.[packages?.[0]]?.downloads || 0
        ob.package_B=compareMonthQuery?.data?.[packages?.[1]]?.downloads || 0
       }
       else if(name==='last-year'){
        ob.package_A=compareYearQuery?.data?.[packages?.[0]]?.downloads || 0
        ob.package_B=compareYearQuery?.data?.[packages?.[1]]?.downloads || 0
       }
       return [ob]
    }
   // console.log(compareDayQuery?.data,compareMonthQuery?.data,compareYearQuery?.data)

  return (

    <div className="flex flex-col gap-8 p-6 justify-center items-center dark:text-yellow-100 text-blue-950 ">
        <div className="flex flex-wrap gap-16 p-6 justify-center items-center dark:bg-dark-bgb bg-yellow-100 dark:text-yellow-100 text-blue-900 rounded-md">
            {
            compareDayQuery?.isLoading && <div className='flex justify-center items-center'><Loader /></div>
            }

            {
            compareDayQuery?.isError && <p className='text-red-500 text-center'>Error fetching data</p>
            }


            <div className="flex flex-col gap-8">
                <h1 className='text-2xl font-bold flex gap-4 flex-col justify-center items-center'>
                <div>package_A : {packages?.[0]}</div>
                <div>package_B : {packages?.[1]}</div>
                </h1>
        
                {
                compareDayQuery?.data && <BarChart data={dataCreator('last-day')} />
                }
            </div>

            {
            compareMonthQuery?.isLoading && <div className='flex justify-center items-center'><Loader /></div>
            }

            {
            compareMonthQuery?.isError && <p className='text-red-500 text-center'>Error fetching data</p>
            }

            <div className="flex flex-col gap-8">
                <h1 className='text-2xl font-bold flex gap-4 flex-col justify-center items-center'>
                <div>package_A : {packages?.[0]}</div>
                <div>package_B : {packages?.[1]}</div>
                </h1>
                {  
                compareMonthQuery?.data && <BarChart data={dataCreator('last-month')} />
                }
            </div>

            {
            compareYearQuery?.isLoading && <div className='flex justify-center items-center'><Loader /></div>
            }

            {
            compareYearQuery?.isError && <p className='text-red-500 text-center'>Error fetching data</p>
            }

            <div className="flex flex-col gap-8">
                <h1 className='text-2xl font-bold flex gap-4 flex-col justify-center items-center'>
                <div>package_A : {packages?.[0]}</div>
                <div>package_B : {packages?.[1]}</div>
                </h1>
                {
                compareYearQuery?.data && <BarChart data={dataCreator('last-year')} />
                }
            </div>

        </div>
     

    </div>
  )
}

export default ComparePackages