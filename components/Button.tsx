import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import classNames from "classnames";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant: "principal" | "secondary" | "cancel";
};

export const Button = (props: ButtonProps) => {
  const { variant, children, ...rest } = props;

  const btnStyle = classNames(
    variant === "principal"
      ? "bg-gradient-to-r from-black to-slate-500 shadow-lg text-3xl shadow-black hover:shadow-yellow-600 text-white font-akshar font-bold py-2 px-4 rounded h-11 w-full cursor-pointer"
      : null,
    variant === "secondary"
      ? "text-white bg-[#c0885d] hover:bg-yellow-600 font-medium rounded-lg text-lg px-5 py-1.5 text-center inline-flex items-center mb-2"
      : null
  );
  return (
    <button {...rest} className={btnStyle}>
      {children}
    </button>
  );
};
