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

    <div className="flex flex-col gap-8 p-6 justify-center items-center">
        <div className="flex flex-wrap gap-14 p-6 justify-center items-center bg-gradient-to-br from-blue-900 via-violet-900 to-indigo-900 text-white rounded-md">
            <div>
            {         
            compareDayQuery?.isLoading && <div className='flex justify-center items-center'><Loader /></div>
            }

            {
            compareDayQuery?.isError && <p className='text-red-500 text-center ml-8'>Error fetching data,<br></br> Scoped Packages not supported</p>
            }

            <div className="flex flex-col gap-6 items-center">
                <h2 className="ml-10">
                    Last Day Downloads Comparison
                </h2>
                {
                compareDayQuery?.data && <BarChart data={dataCreator('last-day')} package_A={packages?.[0]} package_B={packages?.[1]} />
                }
            </div>
            </div>
            
            <div>
            {
            compareMonthQuery?.isLoading && <div className='flex justify-center items-center'><Loader /></div>
            }

            {
            compareMonthQuery?.isError &&  <p className='text-red-500 text-center ml-8'>Error fetching data,<br></br> Scoped Packages not supported</p>
            }

            <div className="flex flex-col gap-6 items-center">
                <h2 className="ml-10">
                    Last Months Downloads Comparison
                </h2>
                {  
                compareMonthQuery?.data && <BarChart data={dataCreator('last-month')} package_A={packages?.[0]} package_B={packages?.[1]} />
                }
            </div>
            </div>

            <div>
            {
            compareYearQuery?.isLoading && <div className='flex justify-center items-center'><Loader /></div>
            }

            {
            compareYearQuery?.isError && <p className='text-red-500 text-center ml-8'>Error fetching data,<br></br> Scoped Packages not supported</p>
            }
            
            <div className="flex flex-col gap-6 items-center">
                <h2 className="ml-10">
                    Last Year Downloads Comparison
                </h2>
                {
                compareYearQuery?.data && <BarChart data={dataCreator('last-year')} package_A={packages?.[0]} package_B={packages?.[1]} />
                }
            </div>

            </div>

        </div>
     

    </div>
  )
}

export default ComparePackages