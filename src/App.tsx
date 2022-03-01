import React from "react";
import "./App.css";
import Header from "./shared/components/Header";
import SearchSection from "./shared/components/SearchSection/SearchSection";

const App = () => {
  return (
    <div className="App">
      <div className="App-Wrapper">
        <Header />
        <SearchSection />
        <div style={{ padding: "10px 20px" }}>
          <p>Please show a list of jobs as per design</p>
        </div>
      </div>
    </div>
  );
};

export default App;
