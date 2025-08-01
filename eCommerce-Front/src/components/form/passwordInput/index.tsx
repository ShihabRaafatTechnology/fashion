import { useState } from "react";
import { Path, FieldValues, UseFormRegister } from "react-hook-form";

type TPasswordInputProps<TFieldValue extends FieldValues> = {
  label: string;
  name: Path<TFieldValue>;
  register: UseFormRegister<TFieldValue>;
  error: string;
};

const PasswordInput = <TFieldValue extends FieldValues>({
  label,
  name,
  register,
  error,
}: TPasswordInputProps<TFieldValue>) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col my-4">
      <label className="text-gray-700 text-base">{label}</label>
      <div className="relative flex items-center mt-2">
        <input
          type={showPassword ? "text" : "password"}
          className="flex-1 p-1 pr-10 border border-gray-300 rounded text-base text-gray-900"
          {...register(name)}
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-4 bg-transparent flex items-center justify-center text-gray-700"
        >
          {showPassword ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M3 3l18 18" />
            </svg>
          )}
        </button>
      </div>
      <span className="text-red-400 italic">{error}</span>
    </div>
  );
};

export default PasswordInput;
