import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button style={{ padding: '0.5rem 1rem', margin: '0.25rem', cursor: 'pointer' }} {...props}>
    {children}
  </button>
);

export default Button; 