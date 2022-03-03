import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../../../assets/icons/Search.svg";
import Button from "../Button";
import Divider from "../Divider";
import Input from "../Input";
import "./SearchSection.css";

interface SearchProps {
  onSearch: (query: string) => void;
}

const SearchSection = ({ onSearch }: SearchProps) => {
  const [input, setInput] = useState<string>("");

  const submitForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onSearch(input);
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
      <Button label="Filter results" onClick={() => {}} />
    </div>
  );
};

export default SearchSection;
