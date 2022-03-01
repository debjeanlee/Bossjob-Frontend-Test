import React, { useCallback, useEffect, useState } from "react";
import "./Pagination.css";

interface PaginationProps {
  totalPages: number;
}

const limit = 5;

const Pagination = ({ totalPages }: PaginationProps) => {
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [numbersShowing, setNumbersShowing] = useState<number[]>([]);

  const getPages = useCallback(() => {
    return Array.from(Array(limit)).map((_, i) => selectedPage + i);
  }, [selectedPage]);

  useEffect(() => {
    if (!numbersShowing.includes(selectedPage)) {
      const pages = getPages();
      setNumbersShowing(pages);
    }
  }, [getPages, numbersShowing, selectedPage]);

  const handlePageClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLLIElement;
    setSelectedPage(Number(target.id));
  };

  const renderPageNumbers = numbersShowing.map((page) => (
    <li
      key={page}
      onClick={handlePageClick}
      className={`${selectedPage === page ? "selected" : ""}`}
      id={page.toString()}
    >
      {page}
    </li>
  ));

  return (
    <ul className="PaginationWrapper">
      <li>&#8249;</li>
      {renderPageNumbers}
      <li>&hellip;</li>
      <li>{totalPages}</li>
      <li>&#8250;</li>
    </ul>
  );
};

export default Pagination;
