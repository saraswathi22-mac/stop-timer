import React, { useState, useEffect } from "react";

const Pagination = ({ apiUrl, itemsPerPage }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${apiUrl}?_page=${currentPage}&_limit=${itemsPerPage}`
        );
        // Assuming the API responds with JSON data
        const jsonData = await response.json();
        setData(jsonData);
        // Retrieving total count of items from the API response headers
        const totalCount = response.headers.get("X-Total-Count");
        setTotalPages(Math.ceil(totalCount / itemsPerPage));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apiUrl, currentPage, itemsPerPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <ol>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li> // Assuming 'name' is the property to display
        ))}
      </ol>
      <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;