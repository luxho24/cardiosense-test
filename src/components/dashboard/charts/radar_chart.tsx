"use client";
import {
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import { legend } from "framer-motion/client";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const HealthMetricsRadar = () => {
  const data = {
    labels: [
      "Blood Pressure",
      "Heart Rate",
      "Glucose Level",
      "Oxygenation",
      "Hydration",
    ],
    datasets: [
      {
        label: "Health Metrics",
        data: [116, 120, 230, 98, 75],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        borderRadius: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return `${context.label}: ${context.raw}`;
          },
        },
      },
    },

    scales: {
      r: {
        angleLines: {
          color: "#fff",
        },
        grid: {
          color: "#555",
        },
        pointLabels: {
          color: "#fff",
        },
        ticks: {
          beginAtZero: true,
          backdropColor: "rgba(0, 0, 0, 0.7)",
        },
      },
    },
  };

  return (
    <div className="w-full h-full bg-transparent">
      <Radar data={data} options={options} />
    </div>
  );
};

export default HealthMetricsRadar;
