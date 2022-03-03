import React from "react";
import "./App.css";
import Header from "./shared/components/Header";
import ListingContainer from "./shared/components/JobListing/ListingContainer";
import Pagination from "./shared/components/Pagination";
import SearchContainer from "./shared/components/SearchSection";
import TotalJobsContainer from "./shared/components/TotalJobs";

const App = () => {
  return (
    <div className="App">
      <div className="App-Wrapper">
        <Header />
        <SearchContainer />
        <div style={{ padding: "var(--l)" }}>
          <TotalJobsContainer />
          <ListingContainer />
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default App;
