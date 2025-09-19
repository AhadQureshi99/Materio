import { Radio, Typography } from "@mui/material";
import React from "react";

const Shipping = () => {
  return (
    <>
      <Typography className="text-secondary">Shipping Type</Typography>
      <div className="d-flex align-items-center my-2">
        <Radio />
        <div className="d-flex flex-column">
          <Typography >Fulfilled by Seller</Typography>
          <Typography className="text-secondary text-sm">
            You'll be responsible for product delivery. Any damage or delay
            during shipping may cost you a Damage fee
          </Typography>
        </div>
      </div>
      <div className="d-flex align-items-center my-2">
        <Radio />
        <div className="d-flex flex-column">
          <Typography >
            Fulfilled by Company name
          </Typography>
          <Typography className="text-secondary text-sm">
            Your product, Our responsibility.For a measly fee, we will handle
            the delivery process for you.
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Shipping;
