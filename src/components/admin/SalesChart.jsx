import React from 'react'
import {  BsThreeDotsVertical } from 'react-icons/bs';
import Sales from './Dashboard_charts/Sales';

const SalesChart = () => {
  return (
    <>
      <div className="card border-0 p-4 shadow">
        <div className="d-flex  justify-content-between">
          <div className="">
            <p className="fw-semibold text-gray m-0">Total Sales</p>
            <p className="text-gray m-0">$21,845</p>
          </div>
          <div className="">
            <BsThreeDotsVertical />
          </div>
        </div>
          <Sales/>
      </div>
    </>
  );
}

export default SalesChart
