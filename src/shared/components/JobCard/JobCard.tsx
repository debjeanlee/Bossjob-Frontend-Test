import React from "react";
import { Job } from "../../../types/Job";
import Divider from "../Divider";
import Row from "../Row";
import "./JobCard.css";

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <div>
      <Divider />
      <Row className="Row-SpaceBetween">
        <h3 className="JobTitle">{job.job_title}</h3>
        <h3 className="PayRange">
          ₱{String(job.salary_range_from).slice(0, 2)}k - ₱
          {String(job.salary_range_to).slice(0, 2)}k
        </h3>
      </Row>
      <div className="Grid"></div>
    </div>
  );
};

export default JobCard;
