import React from "react";

const Ratings = () => {
  return (
    <div className="card p-4 shadow border-0 position-relative">
      <div className="d-flex justify-content-between  ">
        <div>
          <p className="fw-semibold">Ratings</p>
          <div className="mt-4 d-flex gap-2">
            <h4>13K</h4>
            <p style={{ color: "#56CA00" }} className=" fw-semibold">
              +15.6%
            </p>
          </div>
          <div className="bg-purple-light text-purple py-1 px-3 rounded-pill">
            Year of {new Date().getFullYear()}
          </div>
        </div>
        <img
          src="/Dashboard_Images/ratings.png"
          className="position-absolute"
          width={127}
          style={{ top: "-2rem",  right:"7%"}}
          alt=""
        />
      </div>
    </div>
  );
};

export default Ratings;
