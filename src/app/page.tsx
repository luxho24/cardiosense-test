import React from 'react';
import './globals.css';  // Asegúrate de importar el archivo CSS

function SubscriptionPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold glow-title mb-4 fade-in-up">
            Planes de Suscripción
          </h1>
          <p className="text-gray-400 fade-in-up">Elige el plan que mejor se ajuste a tus necesidades</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-1">
          {/* Plan Básico */}
          <div className="w-full md:w-1/3 p-7 bg-gray-800 rounded-lg shadow-md subscription-hover fade-in-up">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-red-500">Básico</h2>
              <p className="text-4xl font-bold my-1 text-white">S/.9.99</p>
              <p className="text-sm text-gray-400 mb-7">por un mes</p>
              <p className="text-gray-400 border-b border-gray-500 pb-2">1 CPU para procesamiento</p>
              <p className="text-gray-400 border-b border-gray-500 pb-2">500 GB de Almacenamiento</p>
              <p className="text-gray-400 border-b border-gray-500 pb-2">Soporte para 2 Usuarios</p>
              <p className="text-gray-400 border-b border-gray-500 pb-2 mb-8">Reportes Semanales</p>
              <button className="glow-on-hover gradient-bg-red text-black py-2 px-4 rounded-lg w-full">
                Comprar ahora
              </button>
            </div>
          </div>

          {/* Plan Estándar */}
          <div className="w-full md:w-1/3 p-12 bg-red-500 rounded-lg shadow-md subscription-hover fade-in-up">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-white">Estándar</h2>
              <p className="text-4xl font-bold my-1 text-white">S/.19.99</p>
              <p className="text-sm text-gray-200 mb-7">por un mes</p>
              <p className="text-gray-200 border-b border-gray-100 pb-2">4 CPU para procesamiento avanzado</p>
              <p className="text-gray-200 border-b border-gray-100 pb-2">1 TB de Almacenamiento</p>
              <p className="text-gray-200 border-b border-gray-100 pb-2">Soporte para 5 Usuarios</p>
              <p className="text-gray-200 border-b border-gray-100 pb-2 mb-8">Reportes Diarios</p>
              <button className="glow-on-hover gradient-bg-red text-black py-2 px-4 rounded-lg w-full">
                Comprar ahora
              </button>
            </div>
          </div>

          {/* Plan Premium */}
          <div className="w-full md:w-1/3 p-7 bg-gray-800 rounded-lg shadow-md subscription-hover fade-in-up">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-red-500">Premium</h2>
              <p className="text-4xl font-bold my-1 text-white">S/.29.99</p>
              <p className="text-sm text-gray-400 mb-7">por un mes</p>
              <p className="text-gray-400 border-b border-gray-500 pb-2">8 CPU para procesamiento intensivo</p>
              <p className="text-gray-400 border-b border-gray-500 pb-2">2 TB de Almacenamiento</p>
              <p className="text-gray-400 border-b border-gray-500 pb-2">Soporte para 10 Usuarios</p>
              <p className="text-gray-400 border-b border-gray-500 pb-2 mb-8">Reportes en Tiempo Real</p>
              <button className="glow-on-hover gradient-bg-red text-black py-2 px-4 rounded-lg w-full">
                Comprar ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionPage;