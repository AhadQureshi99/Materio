import { Checkbox, TextField, Typography } from '@mui/material'
import React from 'react'

const Attributes = () => {
  return (
    <>
      <Typography className="text-secondary">Attributes</Typography>
      <div className="d-flex gap-2 align-items-center ">
        <Checkbox color="#6B6476" />
        <Typography className="text-blacky">Fragile Product</Typography>
      </div>
      <div className="d-flex gap-2 align-items-center ">
        <Checkbox color="#6B6476" />
        <Typography className="text-blacky">Biodegradable</Typography>
      </div>
      <div className="d-flex gap-2 align-items-center ">
        <Checkbox color="#6B6476" />
        <div className="d-flex flex-column">
          <Typography className="text-blacky">Frozen Product</Typography>
          <TextField
            className="my-1 w-100"
            id="outlined-basic"
            size="small"
            placeholder="40 C"
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
      <div className="d-flex gap-2 align-items-center ">
        <Checkbox color="#6B6476" />
        <div className="d-flex flex-column">
          <Typography className="text-blacky">
            Expiry Date of Product
          </Typography>
          <TextField
            className="my-1 w-100"
            id="outlined-basic"
            size="small"
            placeholder="MM/DD/YYYY"
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
    </>
  );
}

export default Attributes
