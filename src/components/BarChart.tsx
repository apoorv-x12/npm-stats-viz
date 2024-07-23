import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';                 

type PropType = {
    data : {
        name: string
        package_A: number
        package_B: number
    }[],
}

const BarChartComponent = (props: PropType) => {
  return (
    <div>
       <ResponsiveContainer width={320} height={250}>
            <BarChart  
             data={props?.data}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip labelStyle={{ color: 'red' }} cursor={{ stroke: 'red', strokeWidth: 1 }} />
                <Legend />
                <Bar dataKey="package_B"  fill="#8884d8" />
                <Bar dataKey="package_A" fill="#82ca9d" />
            </BarChart>
       </ResponsiveContainer>
    </div>
  )
}

export default BarChartComponent