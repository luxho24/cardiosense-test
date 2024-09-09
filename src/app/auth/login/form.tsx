"use client";
import FormInput from "@/components/auth/general/form-input";
import { Button, Checkbox } from "@nextui-org/react";
import React, { useState } from "react";

export default function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    saveAccount: false,
  });
  const [errors, setErrors] = useState({ email: false, password: false });
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const validateForm = () => {
    const newErrors = {
      email:
        !formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      password: !formData.password,
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      try {
        console.log("Logging in...", formData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleLogin} className="space-y-6">
      <div className="space-y-6">
        <FormInput
          type="email"
          name="email"
          value={formData.email}
          error={errors.email}
          errorMessage="Correo requerida."
          onChange={handleChange}
          placeholder="Correo electrónico"
        />
        <div className="space-y-2 pt-2">
          <FormInput
            type="password"
            name="password"
            value={formData.password}
            error={errors.password}
            errorMessage="Contraseña requerida."
            isVisible={isVisible}
            toggleVisibility={toggleVisibility}
            onChange={handleChange}
            placeholder="Contraseña"
          />
          <Checkbox
            color="default"
            size="sm"
            checked={formData.saveAccount}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                saveAccount: e.target.checked,
              }))
            }
          >
            <p className="text-[#8F8D95] text-tiny">Recordar contraseña</p>
          </Checkbox>
        </div>
      </div>

      <Button
        className="bg-[#6E54B5] rounded-md text-white w-full py-3"
        type="submit"
        isLoading={isLoading}
        isDisabled={isLoading}
      >
        Iniciar sesión
      </Button>
    </form>
  );
}
