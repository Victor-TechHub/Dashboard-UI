import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { RevenueData, RevenueOptions } from '../utils/Revenue';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart = () => {

    return (
        <>
            <Bar data={RevenueData} options={RevenueOptions} style={{ paddingBottom: "5px" }} />
        </>

    )
}

export default BarChart