"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Head from "next/head";
import { motion } from "framer-motion";

type ThrottleFunction = (...args: any[]) => void;

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

  return (
    <div className="bg-gray-100 text-gray-800">
      <Head>
        <title>Generador de Rutinas con IA</title>
        <meta
          name="description"
          content="Crea rutinas personalizadas de entrenamiento con inteligencia artificial."
        />
      </Head>

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
          </h1>
          <p className="text-2xl text-gray-300 mt-4">
            Planifica tu entrenamiento con IA adaptada a tus necesidades.
          </p>
          <button
            onClick={scrollToBottom}
            className="mt-8 inline-block px-8 py-4 bg-[#6E54B5] text-white font-bold rounded-full hover:bg-[#553a92] transition-all duration-300"
          >
            ¡Empieza ahora!
          </button>
        </motion.div>
      </motion.section>

      {/* How it Works Section */}
      <motion.section
        id="cómofunciona"
        className="py-20 bg-white text-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">¿Cómo funciona?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "1. Ingresa tus Objetivos",
                description:
                  "Introduce tu información y objetivos para que la IA cree un plan único para ti.",
                img: "https://us.123rf.com/450wm/nd3000/nd30001909/nd3000190900284/129471613-grupo-de-deportistas-en-un-entrenamiento-de-gimnasio.jpg?ver=6",
              },
              {
                title: "2. IA Personaliza tu Rutina",
                description:
                  "Nuestra IA adapta la rutina basada en tu condición física y metas.",
                img: "https://us.123rf.com/450wm/casanowe/casanowe2006/casanowe200600242/150624914-entrenador-musculoso-guapo-mirando-el-plan-de-fitness-en-el-portapapeles-para-hacer-ejercicio-en-el.jpg?ver=6",
              },
              {
                title: "3. Horarios Flexibles",
                description:
                  "Recibe un horario detallado con rutinas para entrenar de lunes a viernes.",
                img: "https://us.123rf.com/450wm/nd3000/nd30001811/nd3000181101335/112583992-grupo-de-j%C3%B3venes-corriendo-en-cintas-de-correr-en-el-moderno-gimnasio-deportivo.jpg?ver=6",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-lg text-center transition-transform duration-300 transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img src={feature.img} alt={feature.title} className="w-20 h-20 mx-auto mb-4 rounded-full shadow-md object-cover" />
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Horarios Section */}
      <motion.section
        id="horarios"
        className="py-20 bg-gray-200 text-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Horarios</h2>
          <div
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-hidden p-4 relative"
            style={{ scrollBehavior: "smooth" }}
          >
            {weekDays.concat(weekDays).map((day, index) => (
              <div
                key={index}
                className="min-w-[250px] h-[350px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center text-center p-6 transition-transform duration-300 transform hover:scale-105"
              >
                <h3 className="text-2xl font-semibold mb-4">{day.day}</h3>
                <ul className="text-gray-700">
                  {day.exercises.map((exercise, i) => (
                    <li key={i} className="mb-2">
                      {exercise}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        id="testimonios"
        className="py-20 bg-white text-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Testimonios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Carlos",
                feedback:
                  "Gracias a la rutina generada, he logrado cumplir mis objetivos de manera eficiente. La personalización fue clave para alcanzar mis metas. La variedad en los ejercicios y la capacidad de ajustar los entrenamientos a mi nivel específico han sido muy valiosos.",
                photo: "https://randomuser.me/api/portraits/men/1.jpg",
              },
              {
                name: "Laura",
                feedback:
                  "La IA ajustó mis entrenamientos a mis necesidades específicas, ¡muy recomendable! Los resultados han sido sorprendentes. Nunca había experimentado un enfoque tan personalizado y efectivo en mis rutinas de entrenamiento.",
                photo: "https://randomuser.me/api/portraits/women/1.jpg",
              },
              {
                name: "Miguel",
                feedback:
                  "El plan que recibí es excelente. Las rutinas son variadas y se ajustan a mi nivel. Estoy muy satisfecho con el servicio. Además, el seguimiento constante y los ajustes recomendados me han ayudado a mantenerme motivado y progresar continuamente.",
                photo: "https://randomuser.me/api/portraits/men/2.jpg",
              },
              {
                name: "Sofia",
                feedback:
                  "Me encanta la flexibilidad de los horarios y la precisión de las rutinas. Sin duda, es la mejor inversión para mi salud. La capacidad de personalizar mi entrenamiento según mis horarios y objetivos ha sido un cambio total en mi rutina diaria.",
                photo: "https://randomuser.me/api/portraits/women/2.jpg",
              },
              {
                name: "Pedro",
                feedback:
                  "La plataforma ha transformado mi enfoque hacia el ejercicio. La personalización de las rutinas y los consejos proporcionados han mejorado significativamente mis resultados y mi bienestar general.",
                photo: "https://randomuser.me/api/portraits/men/3.jpg",
              },
              {
                name: "Ana",
                feedback:
                  "Excelente experiencia. La integración de la IA para crear rutinas a medida ha hecho que mis entrenamientos sean más efectivos y motivadores. Me siento más en forma y saludable.",
                photo: "https://randomuser.me/api/portraits/women/3.jpg",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="p-6 border rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-16 h-16 mx-auto rounded-full object-cover mb-4"
                />
                <p className="text-xl italic">"{testimonial.feedback}"</p>
                <h4 className="mt-4 font-semibold">{testimonial.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        id="cta"
        ref={ctaSectionRef} // Ref agregado aquí
        className="py-20 bg-gradient-to-r from-[#6E54B5] to-[#8561B5] text-white text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">¡Comienza Hoy!</h2>
          <p className="text-xl mb-8">
            Crea una rutina personalizada y comienza tu camino hacia un mejor tú.
          </p>
          <a
            href="#cta"
            className="inline-block px-8 py-4 bg-white text-[#6E54B5] font-bold rounded-full hover:bg-gray-100 transition-all duration-300"
          >
            Regístrate
          </a>
        </div>
      </motion.section>

      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>© 2024 Generador de Rutinas con IA. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
