import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ value}) => {
    const data = {
        // labels: ['January', 'February', 'March', 'April', 'May'],
        // labels: ['Makro', 'Olimpica', 'D1', 'Exito'],
        labels: Object.keys(value),

        datasets: [
            {
                label: 'Precio más alto',
                backgroundColor: 'rgba(0, 149, 255, 1)',
                // data: [65, 59, 80, 81],
                data: Object.values(value).map(site => site.highest),
                barThickness: 30,
            },
            {
                label: '', 
                backgroundColor: 'rgba(0,0, 0, 0)',
                data: [0, 0, 0, 0, 0],
                barThickness: 3,
            },
            {
                label: 'Precio más bajo',
                backgroundColor: 'rgba(0, 224, 150, 1)',
                // data: [45, 79, 10, 41],
                data: Object.values(value).map(site => site.lowest),
                barThickness: 30,
            },
            {
                label: '',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                data: [0, 0, 0, 0, 0],
                barThickness: 3,
            },
            {
                label: 'Precio medio',
                backgroundColor: 'rgba(255, 207, 0, 1)',
                // data: [30, 50, 70, 40],
                data: Object.values(value).map(site => site.average),
                barThickness: 30,
            },
        ],
    };

    const options = {
        responsive: true,

        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Precio total',
                align: 'start',
                font: {
                    size: 20,
                    weight: 'bold',
                },
                color: '#05004E',
            },
        },
        scales: {
            x: {
                stacked: false,
                barPercentage: 0.5, // Adjust this value to increase/decrease bar width
                categoryPercentage: 0.8, // Adjust this value to increase/decrease spacing

            },
            y: {
                stacked: false,
            },
        },
    };

    return (
        <div className="p-4">
            <div>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default BarChart;