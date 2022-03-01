import React, { ReactNode } from "react";
import "./Input.css";

interface InputProps {
  label?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

const Input = ({ label, icon, iconPosition = "left" }: InputProps) => {
  return (
    <div
      className="InputWrapper"
      style={{ flexDirection: iconPosition === "left" ? "row" : "row-reverse" }}
    >
      <div className="SearchIcon">{icon}</div>
      <input type="text" placeholder={label} className="SearchInput" />
    </div>
  );
};

export default Input;
