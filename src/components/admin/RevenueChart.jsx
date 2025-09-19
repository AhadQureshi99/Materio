import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import StackedBarChart from './Dashboard_charts/ColumnChart';

const RevenueChart = () => {
  return (
    <>
      <div className="card border-0 p-4 shadow">
        <div className="d-flex  justify-content-between">
          <div className="">
            <p className="fw-semibold text-gray m-0">Revenue Report</p>
            
          </div>
          <div className="">
            <BsThreeDotsVertical />
          </div>
        </div>
        <StackedBarChart/>
      </div>
    </>
  );
}

export default RevenueChart
