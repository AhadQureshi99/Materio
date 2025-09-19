import React from 'react'
import { FaClock, FaUser, FaBox } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

const Transactions = () => {
  return (
    <>
      <div className="card p-3 shadow border-0 ">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <p className="fw-semibold mb-1">Transactions</p>
            <p className="text-muted small">
              Total <span className="fw-bold">48.5% Growth</span>{" "}
              <span role="img" aria-label="growth">
                😎
              </span>{" "}
              this month
            </p>
          </div>
          <button className="btn btn-white btn-sm">
            <BsThreeDotsVertical size={18} />
          </button>
        </div>

        {/* Stats */}
        <div className="d-flex justify-content-between transaction-icons  mt-4">
          {/* Sales */}
          <div className="d-flex  gap-2 align-items-center">
            <div
              className="d-flex justify-content-center align-items-center bg-purple rounded-3 "
              style={{ width: 40, height: 40 }}
            >
              <FaClock size={20} className="text-white" />
            </div>
            <div className="">
              <p className="text-secondary p-0 m-0">Sales</p>
              <h5 className='p-0 m-0'>245K</h5>
            </div>
          </div>

          {/* Users */}
          <div className="d-flex gap-2 align-items-center">
            <div
              className="d-flex justify-content-center align-items-center  rounded-circle p-2"
              style={{ width: 40, height: 40, backgroundColor: "#56CA00" }}
            >
              <FaUser size={20} className="text-white" />
            </div>
            <div className="">
              <p className="text-secondary p-0 m-0">Users</p>
              <h5 className='p-0 m-0'>12.5K</h5>
            </div>
          </div>

          {/* Product */}
          <div className="d-flex gap-2 align-items-center">
            <div
              className="d-flex justify-content-center align-items-center bg-warning rounded-circle p-2"
              style={{ width: 40, height: 40 }}
            >
              <FaBox size={20} className="text-white" />
            </div>
            <div className="">
              <p className="text-secondary p-0 m-0">Products</p>
              <h5 className='p-0 m-0'>1.54k</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transactions
