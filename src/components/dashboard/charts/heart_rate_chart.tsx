"use client";
import { Line, LineChart, ResponsiveContainer } from "recharts";

const HeartRateChart = () => {
  const data = [
    { bpm: 50 },
    { bpm: 140 },

    { bpm: 90 },
    { bpm: 95 },
    { bpm: 100 },
    { bpm: 140 },

    { bpm: 90 },
    { bpm: 95 },
    { bpm: 100 },
    { bpm: 140 },

    { bpm: 90 },
    { bpm: 95 },
    { bpm: 100 },
  ];

  return (
    <div className="w-full p-4 rounded-lg shadow-md h-full flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-around">
        <p className="text-white text-3xl font-light">♡</p>

        <div className="flex flex-col">
          <h1 className="text-white font-montserrat font-medium">
            Heart Rate Chart
          </h1>
          <p className="text-white text-sm font-light ">120 bpm</p>
        </div>
      </div>
      <div className="flex items-center">
        <ResponsiveContainer width="70%" height="50%">
          <LineChart data={data}>
            <Line
              type="linear"
              dataKey="bpm"
              stroke="#3b82f6"
              strokeWidth={4}
              dot={false}
              activeDot={false}
            />
          </LineChart>
        </ResponsiveContainer>

        <div className="w-20 h-36 rounded-xl bg-blue-700 flex flex-col items-center justify-center text-white">
          <p className="text-lg font-montserrat">120</p>
          <p className="text-sm font-montserrat">bpm</p>
        </div>
      </div>
    </div>
  );
};

export default HeartRateChart;
