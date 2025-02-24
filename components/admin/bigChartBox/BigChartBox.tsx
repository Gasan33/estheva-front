"use client"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import './bigChartBox.scss'

const data = [
    {
        name: 'Sun',
        fatReduction: 4000,
        slimming: 2400,
        hair: 2400,
    },
    {
        name: 'Mon',
        fatReduction: 3000,
        slimming: 1398,
        hair: 2210,
    },
    {
        name: 'Tue',
        fatReduction: 2000,
        slimming: 9800,
        hair: 2290,
    },
    {
        name: 'Wed',
        fatReduction: 2780,
        slimming: 3908,
        hair: 2000,
    },
    {
        name: 'Thu',
        fatReduction: 1890,
        slimming: 4800,
        hair: 2181,
    },
    {
        name: 'Fri',
        fatReduction: 2390,
        slimming: 3800,
        hair: 2500,
    },
    {
        name: 'Sat',
        fatReduction: 3490,
        slimming: 4300,
        hair: 2100,
    },
];

const BigChartBox = () => {
    return (
        <div className='bigChartBox'>
            <h1>Revenue Analytics</h1>
            <div className="chart">
                <ResponsiveContainer width="99%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="hair" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="slimming" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                        <Area type="monotone" dataKey="fatReduction" stackId="1" stroke="#ffc658" fill="#ffc658" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default BigChartBox