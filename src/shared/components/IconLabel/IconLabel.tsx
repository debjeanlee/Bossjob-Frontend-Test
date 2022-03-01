import React, { ReactNode } from "react";
import Row from "../Row";
import "./IconLabel.css";

interface IconLabelProps {
  label: string;
  icon: ReactNode;
}

const IconLabel = ({ label, icon }: IconLabelProps) => {
  return (
    <Row className="Row-AlignItemsCenter">
      <div className="Icon">{icon}</div>
      <p className="Label">{label}</p>
    </Row>
  );
};

export default IconLabel;
