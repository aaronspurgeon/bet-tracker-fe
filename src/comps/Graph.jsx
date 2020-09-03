import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    {
        name: 'Janurary', loss: 12, win: 24,
    },
    {
        name: 'Feburary', loss: 8, win: 2,
    },
    {
        name: 'March', loss: 16, win: 8,
    },
    {
        name: 'April', loss: 9, win: 3,
    },
    {
        name: 'May', loss: 15, win: 17,
    },
    {
        name: 'June', loss: 20, win: 24,
    },
    {
        name: 'July', loss: 10, win: 5,
    },
    {
        name: 'August', loss: 18, win: 30,
    },
    {
        name: 'September', loss: 4, win: 8,
    },
    {
        name: 'October', loss: 19, win: 7,
    },
    {
        name: 'November', loss: 12, win: 3,
    },
    {
        name: 'December', loss: 19, win: 21,
    },
];

export default class Example extends PureComponent {


    render() {
        return (
            <div style={{ margin: '0 auto' }}>
                <h3>2020 Win/Loss</h3>
                <BarChart
                    width={1200}
                    height={600}
                    data={data}
                    margin={{
                        top: 20, right: 30, left: 20, bottom: 5,
                    }}
                    style={{ margin: '0 auto' }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="loss" stackId="a" fill="#8884d8" />
                    <Bar dataKey="win" stackId="a" fill="#82ca9d" />
                </BarChart>
            </div>

        );
    }
}
