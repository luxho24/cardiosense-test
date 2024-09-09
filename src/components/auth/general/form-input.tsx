import { Input } from "@nextui-org/react";
import React from "react";
import { EyeFilledIcon } from "../../../../public/icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../../../public/icons/EyeSlashFilledIcon";

interface FormInputProps {
  type: "email" | "password" | "text";
  name: string;
  value: string;
  error: boolean | undefined;
  errorMessage: string;
  isVisible?: boolean;
  toggleVisibility?: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const FormInput: React.FC<FormInputProps> = ({
  type,
  name,
  value,
  error,
  errorMessage,
  isVisible = false,
  toggleVisibility,
  onChange,
  placeholder,
}) => {
  const isPassword = type === "password";

  return (
    <Input
      variant="bordered"
      label={placeholder}
      name={name}
      type={isPassword && isVisible ? "text" : type}
      value={value}
      onChange={onChange}
      isInvalid={error}
      size="sm"
      className="rounded-none"
      isRequired
      radius="sm"
      errorMessage={error ? errorMessage : ""}
      classNames={{
        input: "text-sm",
        errorMessage: "text-red-500 text-xs",
        inputWrapper: "border border-gray-300",
      }}
      endContent={
        isPassword &&
        toggleVisibility && (
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
            aria-label="toggle password visibility"
          >
            {isVisible ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        )
      }
    />
  );
};

export default FormInput;
