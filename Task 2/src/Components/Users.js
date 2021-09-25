import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./Users.css";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const getUsers = async () => {
    setLoading(true);
    const res = await axios.get(
      ` https://reqres.in/api/users?page=${currentPage}`
    );
    setUsers(res.data.data);
    setPageCount(res.data.total_pages);
    setLoading(false);
  };
  useEffect(() => {
    setTimeout(() => {
      getUsers();
    }, 1500);
  }, [currentPage]);

  const currentPageData = users.map((user, index) => (
    <li className="row user my-3 py-2" key={user.id}>
      <div className="col-1 d-flex align-items-center">
        <h4 className="user-data">{user.id}</h4>
      </div>
      <div className="col-3">
        <img className="avatar" alt={index} src={user.avatar}></img>
      </div>
      <div className="col-4 d-flex align-items-center">
        <h4 className="user-data">{user.first_name + " " + user.last_name}</h4>
      </div>
      <div className="col-4 d-flex align-items-center">
        <h4 className="user-data">{user.email}</h4>
      </div>
    </li>
  ));
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage + 1);
  };
  return (
    <div className="container">
      {loading ? <div class="loader"></div> : currentPageData}
      <div className="paginate-container">
        <ReactPaginate
          previousLabel={"<<<"}
          nextLabel={">>>"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination-disabled"}
          activeClassName={"pagination-active"}
        />
      </div>
    </div>
  );
};

export default Users;
