import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';                 

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
             width={320}
             height={250}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{stroke: 'yellow',}} />
                <YAxis type='number' domain={[0, 'dataMax']} tick={{stroke: 'yellow'}} />
                <Tooltip labelStyle={{ color: 'red' }} cursor={{ stroke: 'yellow', strokeWidth: 2 }} />
                <Legend />
                <Bar dataKey="package_B" name={props?.package_A}  fill="lightgreen" />
                <Bar dataKey="package_A" name={props?.package_B} fill="orange" />
            </BarChart>
    </div>
  )
}

export default BarChartComponent