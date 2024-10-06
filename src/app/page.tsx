<<<<<<< Updated upstream
import React from 'react';
import './globals.css';  // Asegúrate de importar el archivo CSS

function SubscriptionPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold glow-title mb-4 fade-in-up">
            Planes de Suscripción
=======
"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Toastify from 'toastify-js'; // Importa Toastify para que TypeScript lo reconozca
import "toastify-js/src/toastify.css"; // Asegúrate de importar también el CSS

type ThrottleFunction = (...args: any[]) => void;

// Declara la propiedad botpress en el objeto Window
declare global {
  interface Window {
    botpress: any; // Si tienes tipos más específicos para botpress, puedes definirlos aquí
  }
}

const throttle = (func: ThrottleFunction, limit: number): ThrottleFunction => {
  let lastFunc: NodeJS.Timeout | null = null;
  let lastRan: number | null = null;

  return (...args: any[]) => {
    if (lastRan === null) {
      func(...args);
      lastRan = Date.now();
    } else {
      if (lastFunc) clearTimeout(lastFunc);

      lastFunc = setTimeout(() => {
        if (Date.now() - (lastRan as number) >= limit) {
          func(...args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - (lastRan as number)));
    }
  };
};

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const ctaSectionRef = useRef<HTMLDivElement | null>(null); // Ref para la sección de llamada a la acción

  const handleScroll = useCallback(
    throttle(() => {
      setScrollY(window.scrollY);
    }, 100),
    []
  );

  useEffect(() => {
    const container = scrollContainerRef.current;

    if (container) {
      const scrollSpeed = 2;
      const intervalTime = 20;

      const scrollContent = () => {
        container.scrollLeft += scrollSpeed;

        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      };

      container.appendChild(container.children[0].cloneNode(true));

      const interval = setInterval(scrollContent, intervalTime);

      return () => clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const scrollToBottom = () => {
    if (ctaSectionRef.current) {
      ctaSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const weekDays = [
    {
      day: "Lunes",
      exercises: ["Sentadillas", "Flexiones", "Plancha"],
    },
    {
      day: "Martes",
      exercises: ["Burpees", "Zancadas", "Puente de glúteos"],
    },
    {
      day: "Miércoles",
      exercises: ["Dominadas", "Remo con mancuernas", "Curl de bíceps"],
    },
    {
      day: "Jueves",
      exercises: ["Abdominales", "Levantamiento de piernas", "Mountain climbers"],
    },
    {
      day: "Viernes",
      exercises: ["Trote en el lugar", "Saltos de tijera", "Estiramientos"],
    },
  ];

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/toastify-js@1.12.0/src/toastify.min.js";
    script.defer = true;
    document.body.appendChild(script);

    const botpressScript = document.createElement('script');
    botpressScript.src = "https://cdn.botpress.cloud/webchat/v2.1/inject.js";
    botpressScript.defer = true;
    document.body.appendChild(botpressScript);

    botpressScript.onload = () => {
      window.botpress.on('*', (event: any) => { // Especifica el tipo `any` para evitar el error de tipo
        Toastify({ text: `Event: ${event.type}` }).showToast();
      });

      window.botpress.on('webchat:ready', (conversationId: string) => { // Añade tipo `string` al parámetro
        Toastify({ text: 'Webchat Ready' }).showToast();
      });

      window.botpress.on('webchat:opened', (conversationId: string) => {
        Toastify({ text: 'Webchat Opened' }).showToast();
      });

      window.botpress.on('webchat:closed', (conversationId: string) => {
        Toastify({ text: `Webchat Closed` }).showToast();
      });

      window.botpress.on('conversation', (conversationId: string) => {
        Toastify({ text: `Conversation: ${conversationId}` }).showToast();
      });

      window.botpress.on('message', (message: any) => { // Especifica `any` para mensaje
        Toastify({ text: `Message Received: ${message.id}` }).showToast();
      });

      window.botpress.on('messageSent', (message: any) => {
        Toastify({ text: `Message Sent: ${message}` }).showToast();
      });

      window.botpress.on('error', (error: any) => {
        Toastify({ text: `Error: ${error}` }).showToast();
      });

      window.botpress.on('webchatVisibility', (visibility: any) => {
        Toastify({ text: `Visibility: ${visibility}` }).showToast();
      });

      window.botpress.on('webchatConfig', (visibility: any) => {
        Toastify({ text: 'Webchat Config' }).showToast();
      });

      window.botpress.on('customEvent', (anyEvent: any) => {
        Toastify({ text: 'Received a custom event' }).showToast();
      });
    };
    
    const botpressConfigScript = document.createElement('script');
    botpressConfigScript.src = "https://mediafiles.botpress.cloud/205408ca-7d63-4355-a020-feefb809729a/webchat/v2.1/config.js";
    botpressConfigScript.defer = true;
    document.body.appendChild(botpressConfigScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(botpressScript);
      document.body.removeChild(botpressConfigScript);
    };
  }, []);

  return (
    <div className="bg-gray-100 text-gray-800">
      <Head>
        <title>Generador de Rutinas con IA</title>
        <meta
          name="description"
          content="Crea rutinas personalizadas de entrenamiento con inteligencia artificial."
        />
        <link href="https://cdn.jsdelivr.net/npm/toastify-js@1.12.0/src/toastify.min.css" rel="stylesheet" />
      </Head>

      <div id="botpress-webchat"></div>



      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          <div className="text-lg font-bold text-[#6E54B5]">Entrenamiento IA</div>
          <div>
            {["Cómo Funciona", "Horarios", "Testimonios", "¡Comienza Hoy!"].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/ /g, "")}`}
                aria-label={item}
                className="mx-4 text-gray-700 hover:text-[#6E54B5] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section
        className="h-screen bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/dvjfemxbz/image/upload/2d1dba31-871b-4263-8c5a-864805dadc6c_sqlwv3.png")',
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
        variants={sectionVariants}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-extrabold text-white tracking-tight">
            Genera Rutinas Personalizadas
>>>>>>> Stashed changes
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