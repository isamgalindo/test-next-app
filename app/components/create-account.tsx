"use client";
import React, { useState } from "react";
import { User, Mail, Lock, ArrowRight } from "lucide-react";

const CreateAccountForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Reset error when user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    let newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio";
    if (!formData.lastName.trim()) newErrors.lastName = "El apellido es obligatorio";
    if (!formData.email.trim()) newErrors.email = "El email es obligatorio";
    if (formData.email !== formData.confirmEmail) newErrors.confirmEmail = "Los emails no coinciden";
    if (!formData.password.trim()) newErrors.password = "La contraseña es obligatoria";

    // Incluir mayúsuclas, número y un caracter especial
    const passwordErrors: string[] = [];
    if (!/(?=.*[A-Z])/.test(formData.password)) passwordErrors.push("1 letra mayúscula");
    if (!/(?=.*\d)/.test(formData.password)) passwordErrors.push("1 número");
    if (!/(?=.*[!@#$%^&*])/.test(formData.password)) passwordErrors.push("1 carácter especial");

    if (passwordErrors.length > 0) {
      newErrors.password = `La contraseña debe incluir: ${passwordErrors.join(", ")}`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");

    if (validateForm()) {
      setSuccessMessage("¡Cuenta creada exitosamente!");
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full max-w-md mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-2 mb-16 mt-16">
          <h2 className="text-2xl font-semibold text-gray-900">Crea tu cuenta</h2>
          <p className="text-lg text-gray-600">Únete a nosotros</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {[
            { label: "Nombre", name: "name", icon: <User className="w-5 h-5 text-gray-600" />, placeholder: "John" },
            { label: "Apellido", name: "lastName", icon: <User className="w-5 h-5 text-gray-600" />, placeholder: "Doe" },
            { label: "Email", name: "email", icon: <Mail className="w-5 h-5 text-gray-600" />, placeholder: "john.doe@example.com" },
            { label: "Confirma el email", name: "confirmEmail", icon: <Mail className="w-5 h-5 text-gray-600" />, placeholder: "john.doe@example.com" },
          ].map((field) => (
            <div key={field.name} className="space-y-2">
              <label className="block text-base font-medium text-gray-900">{field.label}</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 
                              rounded-full flex items-center justify-center bg-gray-100">
                  {field.icon}
                </div>
                <input
                  type="text"
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full pl-16 pr-4 h-14 rounded-lg border-2 
                           border-gray-200 text-xl font-medium tracking-wide"
                />
              </div>
              {errors[field.name] && <p className="text-sm text-red-500">{errors[field.name]}</p>}
            </div>
          ))}

          {/*Input Contraseña*/}
          <div className="space-y-2">
            <label className="block text-base font-medium text-gray-900">Contraseña</label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 
                            rounded-full flex items-center justify-center bg-gray-100">
                <Lock className="w-5 h-5 text-gray-600" />
              </div>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-16 pr-4 h-14 rounded-lg border-2 
                         border-gray-200 text-xl font-medium tracking-wide"
              />
            </div>
            {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
          </div>

          {/* Mensaje de si se creo la cuenta */}
          {successMessage && <p className="text-green-600 text-center">{successMessage}</p>}

          {/* Boton de crear cuenta */}
          <button
            type="submit"
            className="w-full h-14 rounded-lg bg-black text-white text-lg font-medium flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
          >
            <span>Crear cuenta</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountForm;
