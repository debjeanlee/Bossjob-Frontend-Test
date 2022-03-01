import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import React from "react";
import { Job } from "../../../types/Job";
import Divider from "../Divider";
import IconLabel from "../IconLabel";
import Row from "../Row";
import { ReactComponent as LocationPin } from "../../../assets/icons/LocationPin.svg";
import { ReactComponent as Briefcase } from "../../../assets/icons/Briefcase.svg";
import { ReactComponent as AcademicCap } from "../../../assets/icons/AcademicCap.svg";
import { ReactComponent as Clock } from "../../../assets/icons/Clock.svg";
import "./JobCard.css";

interface JobCardProps {
  job: Job;
}

dayjs.extend(relativeTime);

const JobCard = ({ job }: JobCardProps) => {
  const updatedAt = dayjs(job.updated_at);
  return (
    <div>
      <Row className="Row-SpaceBetween">
        <h3 className="JobTitle">{job.job_title}</h3>
        <h3 className="PayRange">
          ₱{String(job.salary_range_from).slice(0, 2)}k - ₱
          {String(job.salary_range_to).slice(0, 2)}k
        </h3>
      </Row>
      <div className="Grid">
        <IconLabel icon={<LocationPin />} label={job.job_location} />
        <IconLabel
          icon={<Briefcase width="20px" height="20px" />}
          label={job.xp_lvl}
        />
        <div />
        <IconLabel icon={<AcademicCap />} label={job.degree} />
        <IconLabel
          icon={<Clock width="20px" height="20px" />}
          label={job.job_type}
        />
      </div>
      <Row className="Row-SpaceBetween Row-AlignItemsCenter CompanyRow-Wrapper">
        <Row className="Row-AlignItemsCenter">
          <img
            src={job.company_logo}
            className="CompanyLogo"
            alt="company logo"
          />
          <p className="CompanyName">{job.company_name}</p>
        </Row>
        <p className="TimeString">{updatedAt.fromNow()}</p>
      </Row>
      <Divider />
    </div>
  );
};

export default JobCard;
