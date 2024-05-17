import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { InsightData, InsightOptions } from '../utils/Insight';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineChart = () => {
    return (
        <Line
            data={InsightData}
            options={InsightOptions}
            style={{ paddingBottom: "5px" }}
        />
    )
}

export default LineChart