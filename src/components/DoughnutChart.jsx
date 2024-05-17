// DoughnutChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, DoughnutController, Tooltip } from 'chart.js';

ChartJS.register(ArcElement, DoughnutController, Tooltip)

const DoughnutChart = () => {
    const data = {
        labels: ["Volume", "Services"],
        datasets: [
            {
                label: 'Volmue and Services Level',
                data: [39, 76],
                backgroundColor: [
                    "blue",
                    "rgba(10, 194, 193)"
                ],
                borderColor: [
                    "blue",
                    "rgba(10, 194, 193)"
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    font: {
                        family: 'Poppins',
                        size: 10,
                    }
                }
            },
            tooltip: {
                bodyFont: {
                    family: 'Poppins',
                    size: 10,
                    weight: 'normal'
                },
                titleFont: {
                    family: 'Poppins',
                    size: 10,
                    weight: 'bold'
                }
            }
        },
    };

    return (
        <Doughnut data={data} options={options} style={{ paddingBottom: "5px" }} />
    );
};

export default DoughnutChart;
