import React, { PureComponent } from 'react';
import {
    PieChart, Pie, Sector, Cell, Tooltip
} from 'recharts';

let user = localStorage.getItem("user_data")
user = JSON.parse(user)

const data = [
    { name: 'Wins', value: 0 },
    { name: 'Loss', value: 0 }
];

const COLORS = ['#76D7C4', '#F1948A'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export default class Example extends PureComponent {

    render() {
        return (
            <div className='graph-wrapper'>
                <h2 style={{ fontSize: '2rem' }}>Your Win/Loss</h2>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid red', width: '20%', background: '#343742', borderRadius: '20px' }}>
                    <PieChart width={400} height={400}>
                        <Pie
                            data={data}
                            cx={200}
                            cy={200}
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {
                                data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                            }
                        </Pie>

                        <Tooltip />
                    </PieChart>
                </div>
            </div>
        );
    }
}