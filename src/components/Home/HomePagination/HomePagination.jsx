import React from "react";
import { usePagination, DOTS } from "./usePagination";
import { PaginationDiv, PaginationA } from "./HomePaginationStyle";

const HomePagination = (props) => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    });

    if (totalCount === 0) return <div></div>;

    return (
        <PaginationDiv>
            {paginationRange.map((pageNumber, index) => {
                if (pageNumber === DOTS) {
                    return <PaginationA key={index} href="#">{DOTS}</PaginationA>;
                } else {
                    return (
                        <PaginationA
                            href="#"
                            key={"page_" + pageNumber}
                            aria-disabled={currentPage === pageNumber}
                            onClick={() => onPageChange(pageNumber)}
                            isActive={currentPage === pageNumber}
                        >
                            {pageNumber}
                        </PaginationA>
                    );
                }
            })}
        </PaginationDiv>
    );
};

export default HomePagination;
