import React from 'react';
import { Line } from 'react-chartjs-2';
import "chart.js/auto";
import { Card, CardContent, CardHeader } from './ui/card';

const LineChart = () => {
    // Sample data for the chart
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Example Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    };

    return (
        <Card className='w-80 p-0 bg-yellow-600 rounded-none'>
            <CardHeader className='text-lg'>
                Line Chart Example
            </CardHeader>
            <CardContent>
                <Line data={data} />
            </CardContent>
        </Card>
    );
};

export default LineChart;
