import { InputHTMLAttributes } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  inputName: string;
  register: UseFormRegister<FieldValues>;
  registerName: string;
  description?: string;
};

export const Input = (props: InputProps) => {
  const { inputName, register, registerName, description, ...rest } = props;

  return (
    <div className="w-full">
      <h1 className="text-black text-2xl mb-2">{inputName} <span className=" text-gray-500">{description}</span></h1>
      <input
        {...register(registerName)}
        {...rest}
        className="w-full py-1 bg-white border border-slate-300 rounded text-slate-600 px-2"
      />
    </div>
  );
};
