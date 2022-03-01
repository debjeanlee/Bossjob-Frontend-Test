import React from "react";

import "./Button.css";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button = ({ label, onClick }: ButtonProps) => (
  <button className="Button" onClick={onClick}>
    {label}
  </button>
);

export default Button;
