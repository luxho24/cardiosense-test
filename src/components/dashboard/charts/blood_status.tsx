"use client";
import { MdOutlineBloodtype } from "react-icons/md";
import { Bar, BarChart, Cell, ResponsiveContainer } from "recharts";

const data = [
  { time: "10:00", value: 110 },
  { time: "11:00", value: 80 },
  { time: "12:00", value: 130 },
  { time: "13:00", value: 125 },
  { time: "14:00", value: 50 },
  { time: "15:00", value: 220 },
];

export default function BloodStatusChart() {
  return (
    <div className="w-full p-4 rounded-lg shadow-md h-full flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-around">
        <p className="text-white text-3xl font-light">
          <MdOutlineBloodtype />
        </p>

        <div className="flex flex-col">
          <h1 className="text-white font-montserrat font-medium">
            Blood Status
          </h1>
          <p className="text-white text-sm font-light ">116/70</p>
        </div>
      </div>
      <div className="flex items-center">
        <ResponsiveContainer width="70%" height="50%">
          <BarChart data={data}>
            <Bar dataKey="value" radius={[10, 10, 10, 10]}>
              {data.map((index) => (
                <Cell
                  key={`cell-${index}`}
                  fill="#e5e7eb"
                  width={5}
                  height={150}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        <div className="w-20 h-36 rounded-xl bg-gray-500 flex flex-col items-center justify-center text-white">
          <p className="text-lg font-montserrat">116</p>
          <p className="text-sm font-montserrat">/70</p>
        </div>
      </div>
    </div>
  );
}
