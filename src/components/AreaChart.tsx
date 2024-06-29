import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';  

type Props = {
  period : string,
  data : {
    day: string,
    downloads: number
  }[]
}
const Areachart = (props : Props) => {

  return (
   <>
     <div className='w-screen flex flex-col justify-center items-center'>
      <h1 className='mb-2 font-bold'>Downloads {props.period}</h1>
      <ResponsiveContainer width="80%" height={250}>
        <AreaChart data={props.data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                <linearGradient id="downloads" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
                </defs>
                <XAxis dataKey="day"/>
                <YAxis/>
                <Tooltip />
                <Area type="monotone" dataKey="downloads" stroke="#8884d8" fillOpacity={1} fill="url(#downloads)" />
        </AreaChart>
      </ResponsiveContainer>
  
     </div>
     
   </>
  )
}

export default Areachart