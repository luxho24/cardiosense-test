"use client";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const HealthMetricsBarChart = () => {
  const data = {
    labels: ["Systolic", "Diastolic"],
    datasets: [
      {
        label: "Blood Pressure",
        data: [116, 70],
        backgroundColor: ["#4f46e5", "#ec4899"],
        borderColor: ["#4f46e5", "#ec4899"],
        borderWidth: 1,
        borderRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 200,
        ticks: { color: "#fff" },
      },
      x: {
        ticks: { color: "#fff" },
      },
    },
  };

  return (
    <div className="w-full h-full max-w-lg bg-transparent">
      <Bar data={data} options={options} />
    </div>
  );
};

export default HealthMetricsBarChart;
