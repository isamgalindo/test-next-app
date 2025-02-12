"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MessageCircle, Timer, ArrowRight } from "lucide-react";

const VerificationCode = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const [error, setError] = useState(""); 
  const router = useRouter();

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Asegura que solo sean números y no letras u otros caracteres
    const newCode = [...code];
    newCode[index] = value.slice(-1); // Asegura que solo guarde un número
    setCode(newCode);

    // Se mueve a la otra cajita cuando se inserte un número en la cajita que está
    if (value && index < 3) {
      document.getElementById(`code-${index + 1}`)?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.includes("")) {
      setError("Por favor, ingresa el código completo.");
      return;
    }

    setError("");

    // Va al cmponente loading-screen, está 3 segundos ahí y después va a create-account-form
    router.push("/loading-screen");
    setTimeout(() => {
      router.push("/create-account-form");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full max-w-md mx-auto px-6">
        {/* Header con ícono */}
        <div className="mb-8 text-center mt-16">
          <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-gray-100">
            <MessageCircle className="w-8 h-8 text-gray-900" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Ingresa el código</h2>
          <p className="text-gray-600">Enviado al +57 XXX XXX XXXX</p>
        </div>

        {/* Input del código */}
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="flex justify-between gap-4">
            {code.map((digit, i) => (
              <input
                key={i}
                id={`code-${i}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(i, e.target.value)}
                className="w-14 h-14 text-center text-2xl font-bold rounded-lg border-2 border-gray-200"
              />
            ))}
          </div>
          {error && <p className="text-sm text-red-500 text-center">{error}</p>}

          {/* Timer */}
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Timer className="w-4 h-4" />
            <span>02:00</span>
          </div>

          {/* Botón de verificar */}
          <button
            type="submit"
            className="w-full h-14 rounded-lg bg-black text-white text-lg font-medium flex items-center justify-center gap-2 transition-opacity hover:opacity-90">
            <span>Verificar</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Button de reenviar codigo */}
          <button type="button" className="w-full py-2 text-center text-gray-900 font-medium">
            Reenviar código
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerificationCode;
