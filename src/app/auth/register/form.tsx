"use client";
import FormInput from "@/components/auth/general/form-input";
import { Button, DatePicker, Select, SelectItem } from "@nextui-org/react";
import React, { useState } from "react";
import countries from "./countries.json";

interface FormDataType {
  email: string;
  password: string;
  name: string;
  lastname: string;
  dateOfBirth: string;
  country: string;
}

interface ErrorsType {
  email?: boolean;
  password?: boolean;
  name?: boolean;
  lastname?: boolean;
  country?: boolean;
  dateOfBirth?: boolean;
}

export default function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormDataType>({
    email: "",
    password: "",
    name: "",
    lastname: "",
    country: "",
    dateOfBirth: "",
  });
  const [errors, setErrors] = useState<ErrorsType>({});
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const validateForm = () => {
    const newErrors: ErrorsType = {
      email:
        !formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      password: !formData.password,
      name: !formData.name,
      lastname: !formData.lastname,
      country: !formData.country,
      dateOfBirth: !formData.dateOfBirth,
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
    <form onSubmit={handleLogin} className="space-y-3">
      <div className="space-y-6">
        <FormInput
          type="email"
          name="email"
          value={formData.email}
          error={errors.email}
          errorMessage="Correo electrónico requerido."
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
        </div>
        {/* Nombre */}
        <FormInput
          type="text"
          name="name"
          value={formData.name}
          error={errors.name}
          errorMessage="Nombre requerido."
          onChange={handleChange}
          placeholder="Nombre"
        />

        {/* Apellido */}
        <FormInput
          type="text"
          name="lastname"
          value={formData.lastname}
          error={errors.lastname}
          errorMessage="Apellido requerido."
          onChange={handleChange}
          placeholder="Apellido"
        />

        {/* Fecha de nacimiento */}
        <div className="w-full flex gap-x-2">
          <DatePicker
            label="Fecha de nacimiento"
            variant="bordered"
            classNames={{
              input: "text-sm",
              errorMessage: "text-red-500 text-xs",
              inputWrapper: "border border-gray-300",
            }}
            radius="sm"
            isRequired
            name="dateOfBirth"
          />

          {/* País */}
          <Select
            name="country"
            value={formData.country}
            onChange={() => handleChange}
            required
            variant="bordered"
            label="País"
          >
            {countries.map((country) => (
              <SelectItem key={country.code} value={country.code}>
                {country.name}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>

      <Button
        className="bg-[#6E54B5] rounded-md text-white w-full py-3 "
        type="submit"
        isLoading={isLoading}
        isDisabled={isLoading}
      >
        Registrarse
      </Button>
    </form>
  );
}
