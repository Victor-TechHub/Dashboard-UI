export const InsightData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
        {
            label: "Legal Customers",
            data: [453, 529, 674, 385, 722, 631, 481, 757, 328, 644, 569, 491],
            tension: 0.5,
            backgroundColor: 'rgb(75, 192, 192)',
            borderColor: 'rgb(75, 192, 192)'
        },
        {
            label: "New Customers",
            data: [250, 309, 644, 569, 234, 409, 590, 709, 298, 308, 609, 298],
            tension: 0.5,
            backgroundColor: 'gold',
            borderColor: "gold"
        },
        {
            label: "Unique Customers",
            data: [409, 209, 409, 308, 690, 395, 694, 305, 705, 309, 506, 709],
            tension: 0.5,
            backgroundColor: 'purple',
            borderColor: "purple"
        },
    ]
}

export const InsightOptions = {
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
                    family: "Poppins",
                    size: 10
                }
            },
            grid: {
                display: false,
                drawBorder: false
            }
        },
        y: {
            ticks: {
                font: {
                    family: "Poppins",
                    size: 10
                }
            },
            grid: {
                display: false,
                drawBorder: false
            }
        }
    }
}