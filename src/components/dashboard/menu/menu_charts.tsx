import BloodStatusChart from "../charts/blood_status";
import HeartRateChart from "../charts/heart_rate_chart";
import HealthMetricsPolar from "../charts/polar_chart";
import HealthMetricsRadar from "../charts/radar_chart";

export default function MenuCharts() {
  return (
    <div className="col-span-2 grid grid-cols-2 gap-4">
      <div className="border border-gray-400/30 rounded-3xl w-full h-full">
        <BloodStatusChart />
      </div>
      <div className="border border-gray-400/30 rounded-3xl w-full h-full">
        <HeartRateChart />
      </div>
      <div className="border border-gray-400/30 rounded-3xl p-3 w-full h-full">
        <HealthMetricsPolar />
      </div>
      <div className="border border-gray-400/30 rounded-3xl p-3 w-full h-full">
        <HealthMetricsRadar />
      </div>
    </div>
  );
}
