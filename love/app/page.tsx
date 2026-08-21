"use client";

import { useState } from "react";

export default function Home() {
  // Estados para manejar el clímax final
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);

  // Frases que aparecerán si intenta decir que no
  const noPhrases = [
    "No",
    "¿Estás segura?",
    "Piénsalo de nuevo...",
    "¡Mira que soy buen chico!",
    "Me vas a romper el corazón 💔",
    "Ándale, di que sí...",
    "¡Te quedarás sin tu postre favorito!",
    "Ok, ya no te pregunto más... mentira, di que sí."
  ];

  const getNoButtonText = () => {
    return noPhrases[Math.min(noCount, noPhrases.length - 1)];
  };

  // Tamaño dinámico del botón "Sí"
  const yesButtonSize = noCount * 20 + 16; 

  return (
    <main className="min-h-screen font-sans overflow-x-hidden scroll-smooth">
      
      {/* 1. SECCIÓN HERO (PORTADA) - Optimizada para móvil */}
      <section className="min-h-[100svh] bg-pastel-pink text-pastel-text flex flex-col items-center justify-center p-6 text-center space-y-6">
        <div className="w-48 h-48 bg-pastel-rose rounded-full shadow-sm flex items-center justify-center overflow-hidden mb-2 border-4 border-white">
          <span className="text-xs text-pastel-text/60">[Tu Foto Favorita]</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-serif text-pastel-text tracking-wide">
          Lorem ipsum dolor sit amet.
        </h1>
        <p className="text-base text-pastel-text/80 leading-relaxed font-light px-4">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="pt-8">
          <a href="#historia" className="px-6 py-3 bg-pastel-blue text-pastel-text rounded-full shadow-sm animate-bounce inline-block">
            Baja para ver más ↓
          </a>
        </div>
      </section>

      {/* 2. SECCIÓN LÍNEA DE TIEMPO */}
      <section id="historia" className="py-20 bg-white text-pastel-text">
        <div className="px-6 max-w-xl mx-auto">
          <h2 className="text-2xl font-serif text-center mb-12 text-pastel-text">
            Nuestros Mejores Momentos
          </h2>
          <div className="relative border-l-2 border-pastel-rose pl-6 space-y-10 ml-2">
            <div className="relative">
              <div className="absolute -left-[35px] top-1 bg-pastel-blue h-4 w-4 rounded-full border-2 border-pastel-rose"></div>
              <div className="bg-pastel-gray p-5 rounded-lg shadow-sm border border-pastel-rose/30">
                <span className="text-xs font-semibold text-pastel-text/50 uppercase">Fecha 1</span>
                <h3 className="text-xl font-serif mt-1 mb-2">Primer encuentro</h3>
                <p className="font-light text-sm text-pastel-text/80">Duis aute irure dolor in reprehenderit.</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[35px] top-1 bg-pastel-pink h-4 w-4 rounded-full border-2 border-pastel-rose"></div>
              <div className="bg-pastel-gray p-5 rounded-lg shadow-sm border border-pastel-rose/30">
                <span className="text-xs font-semibold text-pastel-text/50 uppercase">Fecha 2</span>
                <h3 className="text-xl font-serif mt-1 mb-2">Esa cita especial</h3>
                <p className="font-light text-sm text-pastel-text/80">Sunt in culpa qui officia deserunt.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN RAZONES */}
      <section className="py-20 bg-pastel-pink/50 text-pastel-text">
        <div className="px-6 max-w-xl mx-auto">
          <h2 className="text-2xl font-serif text-center mb-10 text-pastel-text">
            Cosas que amo de ti
          </h2>
          <div className="space-y-6">
            {/* Razón Móvil 1 */}
            <div className="bg-white rounded-xl shadow-sm p-5 text-center border border-pastel-rose/20">
              <div className="w-20 h-20 mx-auto bg-pastel-blue rounded-full mb-4 flex items-center justify-center overflow-hidden">
                <span className="text-[10px] text-pastel-text/50">[Foto]</span>
              </div>
              <h4 className="text-lg font-serif mb-1">Tu sonrisa</h4>
              <p className="font-light text-pastel-text/70 text-sm">Ut enim ad minim veniam, quis nostrud.</p>
            </div>
            {/* Razón Móvil 2 */}
            <div className="bg-white rounded-xl shadow-sm p-5 text-center border border-pastel-rose/20">
              <div className="w-20 h-20 mx-auto bg-pastel-rose rounded-full mb-4 flex items-center justify-center overflow-hidden">
                <span className="text-[10px] text-pastel-text/50">[Foto]</span>
              </div>
              <h4 className="text-lg font-serif mb-1">Tu forma de ser</h4>
              <p className="font-light text-pastel-text/70 text-sm">Duis aute irure dolor in reprehenderit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GALERÍA MÓVIL */}
      <section className="py-20 bg-white text-pastel-text">
        <div className="px-6 max-w-xl mx-auto">
          <h2 className="text-2xl font-serif text-center mb-10 text-pastel-text">
            Nosotros
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-pastel-gray aspect-square rounded-xl flex items-center justify-center overflow-hidden">
              <span className="text-xs text-pastel-text/50">[Foto 1]</span>
            </div>
            <div className="bg-pastel-pink aspect-square rounded-xl flex items-center justify-center overflow-hidden">
              <span className="text-xs text-pastel-text/50">[Foto 2]</span>
            </div>
            <div className="col-span-2 bg-pastel-blue aspect-[16/9] rounded-xl flex items-center justify-center overflow-hidden">
              <span className="text-xs text-pastel-text/50">[Foto Apaisada 3]</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EL CLÍMAX: LA GRAN PREGUNTA */}
      <section className="min-h-[100svh] bg-pastel-pink text-pastel-text flex flex-col items-center justify-center p-6 text-center">
        {yesPressed ? (
          // Pantalla de Éxito
          <div className="animate-bounce space-y-6">
            <h2 className="text-4xl font-serif text-[#e11d48]">¡Sabía que dirías que sí! ❤️</h2>
            <div className="w-64 h-64 mx-auto bg-white rounded-2xl shadow-md flex items-center justify-center p-2">
               <span className="text-sm text-pastel-text/60">[Foto de los dos celebrando o un GIF tierno]</span>
            </div>
            <p className="text-lg font-light mt-4">Te quiero muchísimo.</p>
          </div>
        ) : (
          // Pantalla de Pregunta
          <div className="space-y-8 w-full max-w-md">
            <h2 className="text-3xl font-serif mb-8 leading-snug">
              Después de todo esto, <br/> ¿Quieres ser mi novia?
            </h2>
            
            {/* Contenedor de Botones - flex-col para móvil */}
            <div className="flex flex-col items-center justify-center gap-4 w-full">
              
              {/* Botón SÍ - Crece dinámicamente */}
              <button
                className="bg-[#10b981] hover:bg-[#059669] text-white font-bold rounded-xl transition-all duration-300 shadow-md w-full"
                style={{ fontSize: yesButtonSize, padding: `${yesButtonSize * 0.75}px` }}
                onClick={() => setYesPressed(true)}
              >
                ¡Sí!
              </button>

              {/* Botón NO */}
              <button
                onClick={() => setNoCount(noCount + 1)}
                className="bg-pastel-gray text-pastel-text font-medium px-6 py-3 rounded-xl transition-all duration-300 shadow-sm border border-gray-200 w-full"
              >
                {getNoButtonText()}
              </button>

            </div>
          </div>
        )}
      </section>

    </main>
  );
}