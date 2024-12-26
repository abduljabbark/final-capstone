import { Box, Tab, Tabs, TextField } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const SecondNavbar = () => {
  // State to manage active tab index
  const [value, setValue] = useState(0);

  // Function to handle tab change
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row", sm: "row" },
        gap: 6,
        mt: 4,
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", width: "auto" }}>
        <Box
          sx={{
            backgroundColor: "#F7F7F7",
            borderRadius: "30px",
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <SearchIcon className="ms-2" />
          <TextField
            variant="standard"
            placeholder="Search in menu"
            sx={{ paddingLeft: "10px", width: "100%", maxWidth: "350px" }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleTabChange}
          textColor="inherit"
          variant="scrollable"
          scrollButtons="auto"
          sx={{ width: "100%" }}
        >
          <Tab
            label={
              <span style={{ fontSize: "14px", fontWeight: "normal" }}>
                Popular{" "}
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  (6)
                </span>
              </span>
            }
          />
          <Tab
            label={
              <span style={{ fontSize: "14px", fontWeight: "normal" }}>
                Summer Deals & Discounts{" "}
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  (1)
                </span>
              </span>
            }
          />
          <Tab
            label={
              <span style={{ fontSize: "14px", fontWeight: "normal" }}>
                Anda{" "}
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  (4)
                </span>
              </span>
            }
          />
          <Tab
            label={
              <span style={{ fontSize: "14px", fontWeight: "normal" }}>
                Paratha{" "}
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  (27)
                </span>
              </span>
            }
          />
          <Tab
            label={
              <span style={{ fontSize: "14px", fontWeight: "normal" }}>
                Hot Beverages{" "}
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  (24)
                </span>
              </span>
            }
          />
        </Tabs>
      </Box>
    </Box>
  );
};

export default SecondNavbar;
