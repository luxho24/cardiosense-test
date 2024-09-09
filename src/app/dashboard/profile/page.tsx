import HeartRateChart from "@/components/dashboard/charts/heart_rate_chart";
import React from "react";

export default function Profile() {
  return (
    <div className="mt-24 p-2 bg-black min-h-screen">
      <p>Llena tus datos para continuar utilizando el dashboard</p>
      <HeartRateChart />
    </div>
  );
}
