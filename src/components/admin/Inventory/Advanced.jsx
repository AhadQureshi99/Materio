import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Advanced = () => {
  return (
    <>
      <Typography className="text-secondary">Advanced</Typography>
      <div className="row align-items-center">
        <div className="col-lg-8">
          <FormControl
            className="my-3"
            fullWidth
            sx={{
              "& .MuiInputLabel-root": {
                color: "#C4C4C4", // Default label color
                "&.Mui-focused": { color: "#8C57FF" }, // Label color on focus
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#C4C4C4" }, // Default border color
                "&:hover fieldset": { borderColor: "#C4C4C4" }, // Hover border color
                "&.Mui-focused fieldset": { borderColor: "#8C57FF" }, // Focus border color
              },
              "& .MuiSelect-icon": {
                color: "#C4C4C4", // Default dropdown icon color
                "&.Mui-focused": { color: "#8C57FF" }, // Dropdown icon color on focus
              },
            }}
          >
            <InputLabel id="demo-simple-select-label">
              Select Varient
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="PRODUCT ID TYPE"
            >
              <MenuItem value={10}>ISBN</MenuItem>
              <MenuItem value={20}>UPC</MenuItem>
              <MenuItem value={30}>EAN</MenuItem>
              <MenuItem value={40}>JAN</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="col-lg-4">
          <TextField
            className="my-1 w-100"
            id="outlined-basic"
            label="Product ID"
            placeholder="100023"
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
};

export default Advanced;
