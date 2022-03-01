import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../../../assets/icons/Search.svg";
import Divider from "../Divider";
import Input from "../Input";
import "./SearchSection.css";

const SearchSection = () => {
  const [input, setInput] = useState<string>("");

  const submitForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("form submitted", input);
  };

  return (
    <div className="SearchSection">
      <form onSubmit={submitForm}>
        <Input
          label="Search for job title or company name"
          icon={<SearchIcon />}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <Divider />
    </div>
  );
};

export default SearchSection;
