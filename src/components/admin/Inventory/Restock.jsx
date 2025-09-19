import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { IoMdCheckmark } from "react-icons/io";

const Restock = () => {
  return (
    <>
      <Typography className="text-gray" sx={{ marginBottom: 1 }}>
        Options
      </Typography>
      <div className="d-flex align-items-center gap-3">
        <TextField
          className="my-2 w-100"
          id="outlined-basic"
          label="Add To Stock"
          placeholder="100"
          variant="outlined"
          size="small" // Adjust input field size
          sx={{
            height: "40px", // Matches the height of the button
            "& .MuiInputBase-root": {
              height: "40px", // Ensures the input field matches the button's height
            },
            "& .MuiInputLabel-root.Mui-focused": { color: "#8C57FF" }, // Label color on focus
            "& .MuiOutlinedInput-root.Mui-focused fieldset": {
              borderColor: "#8C57FF",
            }, // Border color on focus
          }}
        />
        <Button
          variant="contained"
          startIcon={<IoMdCheckmark color="white" />}
          sx={{
            backgroundColor: "#7E4EE5", // Set background color
            height: "40px", // Matches the height of TextField
            width: "150px", // Adjusted button width
            display: "flex",
            alignItems: "center", // Vertically align text and icon
            justifyContent: "center", // Horizontally center text and icon
            textTransform: "none", // Keeps the text casing natural
          }}
        >
          Confirm
        </Button>
      </div>
      <Typography className="text-gray" sx={{ marginBottom: 1 }}>
        Product in stock now: 54
      </Typography>
      <Typography className="text-gray" sx={{ marginBottom: 1 }}>
        Product in transit: 390
      </Typography>
      <Typography className="text-gray" sx={{ marginBottom: 1 }}>
        Last time restocked: 24th June, 2022
      </Typography>
      <Typography className="text-gray" sx={{ marginBottom: 1 }}>
        Total stock over lifetime: 2,430
      </Typography>
    </>
  );
};

export default Restock;
