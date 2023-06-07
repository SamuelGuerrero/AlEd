import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import classNames from 'classnames';

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant: 'principal' | 'accept' | 'cancel';
};

export const Button = (props: ButtonProps) => {
  const { variant, children, ...rest } = props;

  const btnStyle = classNames(
    '',
    variant === 'principal'
      ? 'bg-gradient-to-r from-black to-slate-500 shadow-lg text-3xl shadow-black hover:shadow-yellow-600 text-white font-akshar font-bold py-2 px-4 rounded h-11 w-full cursor-pointer'
      : null,
  );


  return (
    <button {...rest} className={btnStyle}>
      {children}
    </button>
  );
};