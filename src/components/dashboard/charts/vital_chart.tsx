"use client";
import { Line, LineChart, ResponsiveContainer } from "recharts";

const VitalWaveChart = () => {
  const data = [
    { time: "00:00", value: 70 },
    { time: "01:00", value: 75 },
    { time: "02:00", value: 65 },
    { time: "03:00", value: 80 },
    { time: "04:00", value: 72 },
    { time: "05:00", value: 78 },
    { time: "06:00", value: 65 },
    { time: "07:00", value: 85 },
    { time: "08:00", value: 75 },
  ];

  return (
    <ResponsiveContainer>
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default VitalWaveChart;
