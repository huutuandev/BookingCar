import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none focus:outline-none focus:ring-2 focus:ring-[#119C82]/30';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 rounded-lg gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-xl gap-2 h-11',
    lg: 'text-base px-6 py-3.5 rounded-xl gap-2.5 h-13',
  };

  const variantStyles = {
    primary: 'bg-[#119C82] hover:bg-[#0E856F] text-white shadow-sm active:scale-[0.99]',
    outline: 'border border-slate-200 bg-white text-[#232A37] hover:bg-slate-50 hover:border-slate-300 active:scale-[0.99]',
    secondary: 'bg-[#EAFAF3] hover:bg-[#dbf5ea] text-[#119C82] active:scale-[0.99]',
    ghost: 'text-[#119C82] hover:bg-[#EAFAF3] active:bg-[#dbf5ea]',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
