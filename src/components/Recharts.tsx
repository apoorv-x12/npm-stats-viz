
import { useQuery } from '@tanstack/react-query';
import { getSingleDownloads } from '../ApiService';
import Loader from './ui/loader';
import Areachart from './AreaChart';
type Props = {
name : string
}

const Recharts = (props: Props) => {

    const totalWeekQuery = useQuery({
    queryKey: ['weekDownloads',props.name],
    queryFn: () => getSingleDownloads(props.name,"last-week"), // Replace with your actual function
  });
  const totalDayQuery = useQuery({
    queryKey: ['dayDownloads',props.name],
    queryFn: () => getSingleDownloads(props.name,"last-day"), // Replace with your actual function
  });

  const totalMonthQuery = useQuery({
    queryKey: ['monthDownloads',props.name],
    queryFn: () => getSingleDownloads(props.name,"last-month"), // Replace with your actual function
  });

  const totalYearQuery = useQuery({
    queryKey: ['yearDownloads',props.name],
    queryFn: () => getSingleDownloads(props.name,"last-year"), // Replace with your actual function
  });

  return (
    <div className='flex flex-col gap-20'>
     
      <div>
            {totalWeekQuery?.isLoading && <div className='flex justify-center items-center'><Loader /></div>}
            {totalWeekQuery?.isError && <p className='text-red-500 text-center'>Error fetching data</p>}
            {totalWeekQuery?.data?.downloads.length===0 ? null
            :
            <Areachart data={totalWeekQuery?.data?.downloads} period="last-week"/>
            }
      </div>
      <div>
            {totalMonthQuery?.isLoading && <div className='flex justify-center items-center'><Loader /></div>}
            {totalMonthQuery?.isError && <p className='text-red-500 text-center'>Error fetching data</p>}
            {totalMonthQuery?.data?.downloads.length===0 ? null
            :
            <Areachart data={totalMonthQuery?.data?.downloads} period="last-month"/>
            } 
      </div>
      <div>
            {totalYearQuery?.isLoading && <div className='flex justify-center items-center'><Loader /></div>}
            {totalYearQuery?.isError && <p className='text-red-500 text-center'>Error fetching data</p>}
            {totalYearQuery?.data?.downloads.length===0 ? null
            :
            <Areachart data={totalYearQuery?.data?.downloads} period="last-year"/>
            }
      </div>
      <div>
            {totalDayQuery?.isLoading && <div className='flex justify-center items-center'><Loader /></div>}
            {totalDayQuery?.isError && <p className='text-red-500 text-center'>Error fetching data</p>}
            {totalDayQuery?.data?.downloads.length===0 ? null
            :
            <Areachart data={totalDayQuery?.data?.downloads} period="last-day"/>
            }
      </div>
       
    </div>
  )
}

export default Recharts