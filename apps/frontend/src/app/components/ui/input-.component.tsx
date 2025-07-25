import React from 'react';

interface InputProps {
  label?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
}

const InputComponent: React.FC<InputProps> = ({
  label,
  type = 'text',
  name,
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
}) => {
  return (
    <div className="input-wrapper flex flex-col gap-2 mb-5 w-full md:mb-1">
      {label && (
        <label className="mt-2 font-normal hidden md:block " htmlFor={name}>
          {label}
        </label>
      )}
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className="input-field text-sm  py-3 px-2 border border-white-secondary h-12 w-full bg-transparent rounded-md focus:border-2 focus:border-purple-primary focus:outline-none transition-colors duration-300 ease-in-out"
      />
    </div>
  );
};

export default InputComponent;
