import VitalWaveChart from "../charts/vital_chart";

export default function HeartModel() {
  return (
    <div className="flex justify-center items-center mt-10 select-none">
      <div className="relative w-96 h-96 bg-transparent">
        {/* Background Circles */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="absolute w-96 h-96 bg-gray-500/50 opacity-10 border-1 border-white rounded-full" />
          <div className="absolute w-80 h-80 bg-white/20 opacity-20 rounded-full" />
        </div>

        {/* Heart Shape */}
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <img
            className="animate-pulse w-96 h-96"
            src="https://img.pikbest.com/origin/09/14/43/83IpIkbEsTiYt.png!sw800"
            alt="Corazón realista"
          />
        </div>

        {/* Indicators */}
        <div className="absolute animate-pulse top-12 left-12 flex justify-center items-center w-4 h-4 bg-white rounded-full border border-gray-400">
          <div className="w-2 h-2 bg-gray-700 rounded-full animate-pulse" />
        </div>
        <div className="absolute animate-pulse top-16 right-10 flex justify-center items-center w-4 h-4 bg-white rounded-full border border-gray-400">
          <div className="w-2 h-2 bg-gray-700 rounded-full animate-pulse " />
        </div>
        <div className="absolute animate-pulse bottom-10 right-20 flex justify-center items-center w-4 h-4 bg-white rounded-full border border-gray-400">
          <div className="w-2 h-2 bg-gray-700 rounded-full animate-pulse" />
        </div>

        {/* Heart Rate Card */}
        <div className="absolute bottom-1 -left-3 bg-white/40 border border-white/80 h-24 w-40 rounded-2xl shadow-lg text-white pb-6">
          <div className="w-full flex justify-around p-2">
            <span className="text-2xl text-white">♡</span>
            <div className="flex items-center flex-col">
              <p className="text-xs font-semibold">Heart Rate</p>
              <p className="text-sm">120</p>
            </div>
          </div>
          <VitalWaveChart />
        </div>
      </div>
    </div>
  );
}
