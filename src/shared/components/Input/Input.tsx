import React, { ChangeEvent, ReactNode } from "react";
import "./Input.css";

interface InputProps {
  label?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  label,
  icon,
  iconPosition = "left",
  onChange,
}: InputProps) => {
  return (
    <div
      className="InputWrapper"
      style={{ flexDirection: iconPosition === "left" ? "row" : "row-reverse" }}
    >
      <div className="SearchIcon">{icon}</div>
      <input
        type="text"
        placeholder={label}
        className="SearchInput"
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
