export const TargetData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
        {
            label: "Target",
            data: [16, 57, 187, 100, 156, 10, 98],
            backgroundColor: "blue",
            borderRadius: 2,
            barThickness: 12
        },
        {
            label: "Reality",
            data: [55, 90, 87, 20, 120, 67, 45],
            backgroundColor: "rgb(10, 194, 193)",
            borderRadius: 2,
            barThickness: 12

        },
    ]
}


export const TargetOptions = {
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
    scales: {
        x: {
            ticks: {
                font: {
                    family: 'Poppins',
                    size: 10,
                    weight: 'normal'
                },
                maxRotation: 0,
                minRotation: 0,
            },
            grid: {
                display: false,
                drawBorder: false
            }
        },
        y: {
            ticks: {
                font: {
                    family: 'Poppins',
                    size: 10,
                    weight: 'normal'
                },
            },
            grid: {
                display: false,
                drawBorder: false
            }
        }
    }
};