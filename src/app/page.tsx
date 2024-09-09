"use client";

import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
    const [scrollY, setScrollY] = useState(0);

    // Función para manejar el scroll y actualizar el estado de la página
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="relative bg-black text-white overflow-x-hidden">
            <Head>
                <title>Generador de Dietas con IA</title>
                <meta
                    name="description"
                    content="Crea tu dieta personalizada con inteligencia artificial."
                />
            </Head>

            {/* Hero Section */}
            <section
                className="h-screen bg-cover bg-center relative"
                style={{ backgroundImage: 'url("/images/hero-bg.jpg")' }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center">
                    <h1
                        className="text-6xl font-extrabold tracking-tight text-center transition-transform duration-700 ease-out"
                        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
                    >
                        Generador de Dietas con IA
                    </h1>
                    <p
                        className="text-2xl mt-4 text-center opacity-75 transition-transform duration-700 ease-out"
                        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
                    >
                        Tu salud, optimizada con IA.
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section
                id="features"
                className={`py-20 bg-white text-black transition-opacity duration-1000 ease-out ${
                    scrollY > 400 ? "opacity-100" : "opacity-0"
                }`}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        ¿Cómo funciona?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 text-center">
                            <h3 className="text-2xl font-semibold mb-4">
                                1. Ingresa tus Datos
                            </h3>
                            <p>
                                Proporciona tu información para que nuestra IA
                                pueda crear un plan personalizado para ti.
                            </p>
                        </div>
                        <div className="p-6 text-center">
                            <h3 className="text-2xl font-semibold mb-4">
                                2. Personalización con IA
                            </h3>
                            <p>
                                Nuestra tecnología de IA ajusta las
                                recomendaciones según tus necesidades.
                            </p>
                        </div>
                        <div className="p-6 text-center">
                            <h3 className="text-2xl font-semibold mb-4">
                                3. Obtén tu Plan
                            </h3>
                            <p>
                                Recibe un plan detallado y adaptado para mejorar
                                tu estilo de vida.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Parallax Section */}
            <section
                className="h-screen bg-cover bg-center bg-fixed relative"
                style={{ backgroundImage: 'url("/images/diet-bg.jpg")' }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center">
                    <h2
                        className="text-5xl font-extrabold tracking-tight text-center transition-transform duration-700 ease-out"
                        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
                    >
                        Planes de Dieta Personalizados
                    </h2>
                    <p
                        className="text-2xl mt-4 text-center opacity-75 transition-transform duration-700 ease-out"
                        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
                    >
                        Mejora tu salud con nuestras recomendaciones basadas en
                        IA.
                    </p>
                </div>
            </section>

            {/* Health Benefits Section */}
            <section className="py-20 bg-white text-black">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Beneficios para tu salud
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div
                            className={`p-6 transition-transform duration-700 ease-in-out ${
                                scrollY > 800 ? "transform translate-x-0" : "transform -translate-x-16"
                            }`}
                        >
                            <h3 className="text-3xl font-bold mb-4">
                                Mejora tu energía
                            </h3>
                            <p>
                                La dieta personalizada te ayudará a sentirte más
                                energético y productivo durante el día.
                            </p>
                        </div>
                        <div
                            className={`p-6 transition-transform duration-700 ease-in-out ${
                                scrollY > 800 ? "transform translate-x-0" : "transform translate-x-16"
                            }`}
                        >
                            <h3 className="text-3xl font-bold mb-4">
                                Pérdida de peso efectiva
                            </h3>
                            <p>
                                Con nuestras recomendaciones, lograrás bajar de
                                peso de manera saludable y sostenible.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-gray-100 text-black">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Testimonios de nuestros usuarios
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6">
                            <blockquote className="text-xl italic">
                                "¡Este plan ha transformado mi vida! En pocas
                                semanas, logré más energía y perdí peso."
                            </blockquote>
                            <cite className="block mt-4 text-right font-bold">
                                - María Rodríguez
                            </cite>
                        </div>
                        <div className="p-6">
                            <blockquote className="text-xl italic">
                                "Las recomendaciones son personalizadas y se
                                ajustan perfectamente a mi estilo de vida. ¡Me
                                encanta!"
                            </blockquote>
                            <cite className="block mt-4 text-right font-bold">
                                - Juan Pérez
                            </cite>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section
                id="cta"
                className={`py-20 bg-black text-white transition-opacity duration-1000 ease-out ${
                    scrollY > 1200 ? "opacity-100" : "opacity-0"
                }`}
            >
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8">Empieza ahora</h2>
                    <a
                        href="#signup"
                        className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-300 transition-all duration-300 ease-out"
                    >
                        Crear mi plan
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 bg-black text-center text-gray-400">
                <p>
                    &copy; 2024 Generador de Dietas IA. Todos los derechos
                    reservados.
                </p>
            </footer>
        </div>
    );
}
