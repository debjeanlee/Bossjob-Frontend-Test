import React from "react";
import Divider from "../Divider";

interface TotalJobProps {
  totalListings?: number;
}

const TotalJobs = ({ totalListings }: TotalJobProps) => {
  if (!totalListings || totalListings < 1) {
    return <></>;
  }
  return (
    <div>
      <p>{totalListings} jobs found</p>
      <Divider style={{ marginBottom: "var(--m)" }} />
    </div>
  );
};

export default TotalJobs;
