import React from "react";
import "./App.css";
import { mockJob } from "./mocks/mockJob";
import Header from "./shared/components/Header";
import JobCard from "./shared/components/JobCard";
import SearchSection from "./shared/components/SearchSection/SearchSection";

const App = () => {
  return (
    <div className="App">
      <div className="App-Wrapper">
        <Header />
        <SearchSection />
        <div style={{ padding: "var(--m)" }}>
          <p>1231 jobs found</p>
          <JobCard job={mockJob} />
        </div>
      </div>
    </div>
  );
};

export default App;
