"use client";
import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const HealthMetricsPolar = () => {
  const data = {
    datasets: [
      {
        label: "Health Metrics",
        data: [116, 120, 230, 98, 75],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      r: {
        ticks: {
          color: "#fff",
          beginAtZero: true,
          backdropColor: "rgba(0, 0, 0, 0.7)",
        },
        grid: {
          color: "#6b7280",
        },
        angleLines: {
          color: "#fff",
        },
      },
    },
  };

  return (
    <div className="w-full h-full max-w-lg bg-transparent">
      <PolarArea data={data} options={options} />
    </div>
  );
};

export default HealthMetricsPolar;
