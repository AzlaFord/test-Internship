import React from 'react';

type CardProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

const Card: React.FC<CardProps> = ({ children, style, className }) => (
  <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, ...style }} className={className}>
    {children}
  </div>
);

export default Card; 