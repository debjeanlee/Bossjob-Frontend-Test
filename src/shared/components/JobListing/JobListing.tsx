import React, { useEffect } from "react";
import { Job } from "../../../store/jobs/types";
import JobCard from "../JobCard";

interface ListingProps {
  jobs?: Job[];
  fetchJobs: () => void;
}

const JobListing = ({ jobs, fetchJobs }: ListingProps) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => fetchJobs(), []);

  return (
    <div>
      {jobs?.map((job, i) => (
        <JobCard key={i} job={job} />
      ))}
    </div>
  );
};

export default JobListing;
