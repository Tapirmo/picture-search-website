import React from "react";
import search1 from "../img/search1.svg";

const Search = ({ search, setInput }) => {
  //搜尋欄
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="container">
      <div className="row justify-content-center mb-4">
        <div className="col-6 text-center">
          <img
            src={search1}
            alt="good"
            style={{ maxWidth: "45%", height: "auto" }}
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <form className="d-flex" role="search" onSubmit={search}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="來輸入您想看的圖片吧"
              aria-label="Search"
              onChange={inputHandler}
            />
            <button className="btn btn-outline-success">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
