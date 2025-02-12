"use client"; 

import React, { useState } from "react";
import { Phone, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation"; 

const PhoneInput = () => {
  const [phone, setPhone] = useState(""); 
  const [error, setError] = useState(""); 
  const router = useRouter();


  // Se asegura de que no esté vacio el telefono
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!phone.trim()) {
      setError("Por favor, ingresa un número de teléfono válido.");
      return;
    }

    // Navega al componente verification-code
    router.push("/verification-code");
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full max-w-md mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-2 mb-16 mt-16">
          <h2 className="text-2xl font-semibold text-gray-900">
            Ingresa tu número
          </h2>
          <p className="text-lg text-gray-600">
            Lo usarás para iniciar sesión
          </p>
        </div>

        {/* Input del celular */}
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="block text-base font-medium text-gray-900">
              Número de teléfono
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 
                            rounded-full flex items-center justify-center bg-gray-100">
                <Phone className="w-5 h-5 text-gray-600" />
              </div>
              <input
                type="tel"
                placeholder="+57 XXX XXX XXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full pl-16 pr-4 h-14 rounded-lg border-2 
                         border-gray-200 text-xl font-medium tracking-wide"
              />
            </div>
            {error && <p className="text-sm text-red-500 pl-4">{error}</p>}
            <p className="text-sm pl-4 text-gray-500">
              Ejemplo: +57 321 123 4567
            </p>
          </div>

          <button
            type="submit"
            className="w-full h-14 rounded-lg bg-black text-white text-lg 
                     font-medium flex items-center justify-center gap-2 transition-opacity hover:opacity-90">
            <span>Continuar</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default PhoneInput;
