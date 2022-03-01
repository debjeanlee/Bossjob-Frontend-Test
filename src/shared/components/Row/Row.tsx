import React, { ReactNode } from "react";

import "./Row.css";

interface RowProps {
  className?: string;
  children?: ReactNode;
  [x: string]: any;
}

const Row = ({ className, children, ...rest }: RowProps) => (
  <div className={`Row ${className}`} {...rest}>
    {children}
  </div>
);

export default Row;
