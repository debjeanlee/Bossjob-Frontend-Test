import React, { useEffect, useState } from "react";
import "./Pagination.css";

interface PaginationProps {
  totalPages: number;
  onPageClick?: (page: number) => void;
}

const limit = 5;
const ellipsesOffset = 2;

const Pagination = ({ totalPages, onPageClick }: PaginationProps) => {
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [numbersShowing, setNumbersShowing] = useState<number[]>([]);

  useEffect(() => {
    const getPages = () => {
      let startPage: number;

      if (selectedPage + limit > totalPages) {
        startPage = totalPages - limit + 1;
        return Array.from(Array(limit)).map((_, i) => startPage + i);
      }
      if (selectedPage <= limit - ellipsesOffset) {
        startPage = 1;
        return Array.from(Array(limit)).map((_, i) => startPage + i);
      }
      if (selectedPage >= totalPages - ellipsesOffset) {
        startPage = totalPages - limit + 1;
        return Array.from(Array(limit)).map((_, i) => startPage + i);
      }
      if (selectedPage - ellipsesOffset > 1) {
        startPage = selectedPage - 1;
        return Array.from(Array(limit - ellipsesOffset)).map(
          (_, i) => startPage + i
        );
      }
      startPage = selectedPage - ellipsesOffset;
      return Array.from(Array(limit)).map((_, i) => startPage + i);
    };
    setNumbersShowing(getPages());
  }, [selectedPage, totalPages]);

  const handlePageClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLLIElement;
    setSelectedPage(Number(target.id));
    onPageClick?.(Number(target.id));
  };

  const handlePrevClick = () => {
    if (selectedPage > 1) {
      const next = selectedPage - 1;
      setSelectedPage(next);
      onPageClick?.(next);
    }
  };

  const handleNextClick = () => {
    if (selectedPage < totalPages) {
      const next = selectedPage + 1;
      setSelectedPage(next);
      onPageClick?.(next);
    }
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
      <li
        className={`${selectedPage > 1 ? "selected" : ""}`}
        onClick={handlePrevClick}
      >
        &#8249;
      </li>
      {selectedPage > ellipsesOffset && selectedPage > limit - ellipsesOffset && (
        <>
          <li id="1" onClick={handlePageClick}>
            1
          </li>
          <li>&hellip;</li>
        </>
      )}
      {renderPageNumbers}
      {!(selectedPage + limit > totalPages) && (
        <>
          <li>&hellip;</li>
          <li id={totalPages.toString()} onClick={handlePageClick}>
            {totalPages}
          </li>
        </>
      )}
      <li
        className={`${selectedPage < totalPages ? "selected" : ""}`}
        onClick={handleNextClick}
      >
        &#8250;
      </li>
    </ul>
  );
};

export default Pagination;
