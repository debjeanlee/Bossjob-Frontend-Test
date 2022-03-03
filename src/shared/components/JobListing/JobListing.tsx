import React from "react";
import { Job } from "../../../store/jobs/types";
import JobCard from "../JobCard";

interface ListingProps {
  jobs?: Job[];
}

const JobListing = ({ jobs }: ListingProps) => {
  return (
    <div>
      {jobs?.map((job, i) => (
        <JobCard key={i} job={job} />
      ))}
    </div>
  );
};

export default JobListing;
