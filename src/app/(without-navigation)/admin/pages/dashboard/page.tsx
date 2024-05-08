"use client";
import {
  Box,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts/PieChart";

const AdminDashboardPage = () => {
  const [filter, setFilter] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value as string);
  };

  return (
    <Box sx={{ display: "flex", marginLeft: "250px" }}>
      <Box sx={{ p: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "25px",
          }}
        >
          <Typography variant="h5">Cumulative Counts</Typography>
          <FormControl
            sx={{
              width: "120px",
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
            }}
          >
            <InputLabel>Filter</InputLabel>
            <Select value={filter} label="Filter" onChange={handleChange}>
              <MenuItem value={"monthly"}>Monthly</MenuItem>
              <MenuItem value={"yearly"}>Yearly</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            marginBottom: "25px",
          }}
        >
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "225px",
              height: "200px",
              bgcolor: "#e9c46a",
            }}
            elevation={0}
          >
            <CardContent>
              <Typography sx={{ color: "white", fontSize: "18px" }}>
                Total Blogs: 120
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "225px",
              height: "200px",
              bgcolor: "#2a9d8f",
            }}
            elevation={0}
          >
            <CardContent>
              <Typography sx={{ color: "white", fontSize: "18px" }}>
                Total Users: 120
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "225px",
              height: "200px",
              bgcolor: "#f4a261",
            }}
            elevation={0}
          >
            <CardContent>
              <Typography sx={{ color: "white", fontSize: "18px" }}>
                Total Upvotes: 120
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "225px",
              height: "200px",
              bgcolor: "#e76f51",
            }}
            elevation={0}
          >
            <CardContent>
              <Typography sx={{ color: "white", fontSize: "18px" }}>
                Total Downvotes: 120
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "225px",
              height: "200px",
              bgcolor: "#e76f51",
            }}
            elevation={0}
          >
            <CardContent>
              <Typography sx={{ color: "white", fontSize: "18px" }}>
                Total Comments: 120
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box>
          <Typography variant="h5">Visualizations</Typography>
        </Box>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <LineChart
            xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
            series={[
              {
                data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
                showMark: ({ index }) => index % 2 === 0,
              },
            ]}
            width={500}
            height={300}
          />

          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 10, label: "series A" },
                  { id: 1, value: 15, label: "series B" },
                  { id: 2, value: 20, label: "series C" },
                ],
              },
            ]}
            width={400}
            height={200}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminDashboardPage;
