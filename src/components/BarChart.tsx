import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,LabelList} from 'recharts';                 

type PropType = {
    data : {
        name: string
        package_A: number
        package_B: number
    }[],
    package_A: string,
    package_B: string
}

const BarChartComponent = (props: PropType) => {

  return (
    <div>
            <BarChart  
             data={props?.data}
             width={300}
             height={250}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{stroke: 'yellow',}} />
                <YAxis type='number' domain={[0, 1.5*Math.max(props?.data[0]?.package_A, props?.data[0]?.package_B)]} tick={false} />
                <Tooltip labelStyle={{ color: 'red' }} cursor={{ stroke: 'yellow', strokeWidth: 2 }} />
                <Legend />
                 <Bar dataKey="package_B" name={props?.package_B} fill="lightgreen">
                    <LabelList dataKey="package_B" position="top" fill="white" />
                 </Bar>
                 <Bar dataKey="package_A" name={props?.package_A} fill="orange">
                    <LabelList dataKey="package_A" position="top" fill="white" />
                 </Bar>
            </BarChart>
    </div>
  )
}

export default BarChartComponent