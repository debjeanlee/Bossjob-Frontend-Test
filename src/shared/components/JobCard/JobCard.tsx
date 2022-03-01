import React from "react";
import { Job } from "../../../types/Job";
import Divider from "../Divider";
import Row from "../Row";
import "./JobCard.css";

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  const updatedAt = new Date(job.updated_at);
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
      <Row className="Row-SpaceBetween Row-AlignItemsCenter">
        <Row className="Row-AlignItemsCenter">
          <img
            src={job.company_logo}
            className="CompanyLogo"
            alt="company logo"
          />
          <p className="CompanyName">{job.company_name}</p>
        </Row>
        <p className="TimeString">{updatedAt.toTimeString()}</p>
      </Row>
    </div>
  );
};

export default JobCard;
