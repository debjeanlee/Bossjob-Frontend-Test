import React, { useEffect, useState } from "react";
import "./Pagination.css";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageClick: (page: number) => void;
  onNextClick: () => void;
  onPrevClick: () => void;
  fetchJobs: (page: number, query: string) => void;
  query: string;
}

const limit = 5;
const ellipsesOffset = 2;

const Pagination = ({
  totalPages,
  currentPage,
  onNextClick,
  onPrevClick,
  onPageClick,
  query,
  fetchJobs,
}: PaginationProps) => {
  const [numbersShowing, setNumbersShowing] = useState<number[]>([]);

  useEffect(() => {
    const getPages = () => {
      let startPage: number;
      if (totalPages > limit) {
        if (currentPage + limit > totalPages) {
          startPage = totalPages - limit + 1;
          return Array.from(Array(limit)).map((_, i) => startPage + i);
        }
        if (currentPage <= limit - ellipsesOffset) {
          startPage = 1;
          return Array.from(Array(limit)).map((_, i) => startPage + i);
        }
        if (currentPage >= totalPages - ellipsesOffset) {
          startPage = totalPages - limit + 1;
          return Array.from(Array(limit)).map((_, i) => startPage + i);
        }
        if (currentPage - ellipsesOffset > 1) {
          startPage = currentPage - 1;
          return Array.from(Array(limit - ellipsesOffset)).map(
            (_, i) => startPage + i
          );
        }
        startPage = currentPage - ellipsesOffset;
        return Array.from(Array(limit)).map((_, i) => startPage + i);
      } else {
        startPage = 1;
        return Array.from(Array(totalPages)).map((_, i) => startPage + i);
      }
    };

    setNumbersShowing(getPages());
  }, [currentPage, totalPages]);

  const handlePageClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLLIElement;
    const page = Number(target.id);
    onPageClick(page);
    fetchJobs(page, query);
  };
  const handleNextClick = () => {
    if (currentPage < totalPages) {
      fetchJobs(currentPage + 1, query);
    }
    onNextClick();
  };
  const handlePrevClick = () => {
    if (currentPage > 1) {
      fetchJobs(currentPage, query);
    }
    onPrevClick();
  };

  const renderPageNumbers = numbersShowing.map((page) => (
    <li
      key={page}
      onClick={handlePageClick}
      className={`${currentPage === page ? "selected" : ""}`}
      id={page.toString()}
    >
      {page}
    </li>
  ));

  if (totalPages < 2) {
    return <></>;
  }

  return (
    <ul className="PaginationWrapper">
      <li
        className={`${currentPage > 1 ? "selected" : ""}`}
        onClick={handlePrevClick}
      >
        &#8249;
      </li>
      {totalPages > limit &&
        currentPage > ellipsesOffset &&
        currentPage > limit - ellipsesOffset && (
          <>
            <li id="1" onClick={handlePageClick}>
              1
            </li>
            <li>&hellip;</li>
          </>
        )}
      {renderPageNumbers}
      {totalPages > limit && !(currentPage + limit > totalPages) && (
        <>
          <li>&hellip;</li>
          <li id={totalPages.toString()} onClick={handlePageClick}>
            {totalPages}
          </li>
        </>
      )}
      <li
        className={`${currentPage < totalPages ? "selected" : ""}`}
        onClick={handleNextClick}
      >
        &#8250;
      </li>
    </ul>
  );
};

export default Pagination;
