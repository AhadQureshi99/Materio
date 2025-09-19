import { Radio, TextField, Typography } from '@mui/material';
import React from 'react'

const Global = () => {
  return (
    <>
      <Typography className="text-secondary">Global Delivery</Typography>
      <div className="d-flex align-items-center my-2">
        <Radio />
        <div className="d-flex flex-column">
          <Typography>Worldwide delivery</Typography>
          <Typography className="text-secondary text-sm">
            Only available with Shipping method:{" "}
            <span className="text-purple"> Fulfilled by Company name</span>
          </Typography>
        </div>
      </div>
      <div className="d-flex align-items-center my-2">
        <Radio />
        <div className="d-flex flex-column">
          <TextField
            className="my-1 w-100"
            id="outlined-basic"
            size='small'
            placeholder="USA"
            variant="outlined"
            sx={{
              "& .MuiInputLabel-root.Mui-focused": { color: "#8C57FF" }, // Label color on focus
              "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                borderColor: "#8C57FF",
              }, // Border color on focus
            }}
          />
        </div>
      </div>
      <div className="d-flex align-items-center my-2">
        <Radio />
        <div className="d-flex flex-column">
          <Typography>Local delivery</Typography>
          <Typography className="text-secondary text-sm">
            Deliver to your country of residence :{" "}
            <span className="text-purple"> Change profile address</span>
          </Typography>
        </div>
      </div>
    </>
  );
}

export default Global
