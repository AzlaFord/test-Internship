import React from 'react';
import './Table.css';

type TableProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

const Table: React.FC<TableProps> = ({ children, style, className }) => (
  <table style={{ width: '100%', borderCollapse: 'collapse', ...style }} className={className}>
    {children}
  </table>
);

export default Table; 