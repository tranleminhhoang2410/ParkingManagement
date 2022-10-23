import { BarChart, XAxis, YAxis, Bar, LabelList, CartesianGrid, Tooltip, Legend } from 'recharts';
import { data } from './data'
import { ColorConfig } from './ColorConfig'

function StackedColumnChart() {
    return (
        <>
            <BarChart
                width={750}
                height={500}
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
            >
                <CartesianGrid strokeDasharray="2 3" />
                <XAxis
                    dataKey="month"
                    interval={0}
                />
                <YAxis
                    label={{
                        value: 'Number of vehicles',
                        angle: -90,
                        position: 'insideLeft',
                    }}
                />
                <Tooltip />
                {Object.keys(ColorConfig).map((vehicle) => {
                    return (
                        <Bar
                            key={vehicle}
                            dataKey={vehicle}
                            stackId="a"
                            fill={ColorConfig[vehicle]}
                        >
                            <LabelList dataKey={vehicle} style={{ fill: '#FFFFFF' }} />
                        </Bar>
                    );
                })}
                <Legend verticalAlign="bottom" height={50} />
            </BarChart>
        </>
    );
}

export default StackedColumnChart;