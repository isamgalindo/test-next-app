"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

const LoginLanding = () => {
  const router = useRouter();

  // Navega al componente phone-input
  const handleContinue = () => {
    router.push("/phone-input");
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full max-w-md mx-auto px-6">
        {/* App Logo */}
        <div className="flex justify-center mb-20 mt-16">
          <div className="h-8 w-32 bg-black rounded" />
        </div>

        {/* Mensaje de bienvenida */}
        <div className="text-center space-y-3 mb-20">
          <h2 className="text-2xl font-semibold text-gray-900">Bienvenido</h2>
          <p className="text-lg text-gray-600">Comienza con tu cuenta</p>
        </div>

        {/* Boton "Continuar" */}
        <button
          className="w-full h-14 rounded-lg bg-black text-white text-lg 
                     font-medium flex items-center justify-center gap-2 
                     transition-opacity hover:opacity-90"
          onClick={handleContinue} // Llama a la función para ir al otro componente
        >
          <span>Continuar</span>
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Terminos y condiciones */}
        <p className="text-center text-sm mt-6 text-gray-500">
          Al continuar, aceptas nuestros{" "}
          <button className="font-medium text-black">Términos y Condiciones</button>
        </p>
      </div>
    </div>
  );
};

export default LoginLanding;
