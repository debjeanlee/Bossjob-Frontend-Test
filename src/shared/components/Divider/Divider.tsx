import React from "react";

import "./Divider.css";

interface DividerProps {
  className?: string;
  [x: string]: any;
}

const Divider = ({ className, ...rest }: DividerProps) => (
  <div className={`Divider ${className ? className : ""}`} {...rest} />
);

export default Divider;
