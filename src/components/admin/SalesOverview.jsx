import React from "react";
import DonutChart from "./Dashboard_charts/DountChart";
import { PiWallet } from "react-icons/pi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoDot, GoDotFill } from "react-icons/go";
import { Typography } from "@mui/material";

const SalesOverview = () => {
  return (
    <>
      <div className="card border-0 p-4 shadow">
        <div className="d-flex  justify-content-between mb-4">
          <div className="">
            <p className="fw-semibold text-gray m-0">Sales Overview</p>
          </div>
          <div className="">
            <BsThreeDotsVertical />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <DonutChart />
          </div>
          <div className="col-sm-6">
            <div className="d-flex flex-column w-100">
              <div className="d-flex gap-2">
                <div
                  style={{ width: "40px", height: "40px" }}
                  className="bg-purple-light d-flex align-items-center rounded-3 justify-content-center"
                >
                  <PiWallet color="#8C57FF" size={25} />
                </div>
                <div className="d-flex flex-column">
                  <p className="text-secondary m-0">Number of Sales</p>
                  <p className="fw-semibold m-0">$86,400</p>
                </div>
              </div>
              <hr />
            </div>
            <div className="row">
              <div className="col-6">
                <div className="d-flex gap-2 align-items-center">
                  <GoDotFill color="#8C57FF" />
                  <Typography style={{ color: "#9F9CA6" }}>Apparel</Typography>
                </div>
                <Typography style={{ color: "#9F9CA6" }}>$12,150</Typography>
              </div>
              <div className="col-6">
                <div className="d-flex gap-2 align-items-center">
                  <GoDotFill color="#8C57FF" />
                  <Typography style={{ color: "#9F9CA6" }}>
                    Electronics
                  </Typography>
                </div>
                <Typography style={{ color: "#9F9CA6" }}>$24,900</Typography>
              </div>
              <div className="col-6">
                <div className="d-flex gap-2 align-items-center">
                  <GoDotFill color="#8C57FF" />
                  <Typography style={{ color: "#9F9CA6" }}>FMCG</Typography>
                </div>
                <Typography style={{ color: "#9F9CA6" }}>$12,750</Typography>
              </div>
              <div className="col-6">
                <div className="d-flex gap-2 align-items-center">
                  <GoDotFill color="#8C57FF" />
                  <Typography style={{ color: "#9F9CA6" }}>
                    Sales
                  </Typography>
                </div>
                <Typography style={{ color: "#9F9CA6" }}>$50,200</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesOverview;
