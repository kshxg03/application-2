"use client";
import {
  Avatar,
  Badge,
  Box,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import React from "react";

const topBloggersPage = () => {
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
          <Typography variant="h5">Top 10 bloggers of all time.</Typography>
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
            flexWrap: "wrap",
          }}
        >
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "230px",
              height: "230px",
              bgcolor: "#323232",
            }}
            elevation={0}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={<MilitaryTechIcon sx={{ color: "gold" }} />}
              >
                <Avatar sx={{ bgcolor: "black" }}>AS</Avatar>
              </Badge>
              <Typography
                sx={{ color: "white", fontSize: "18px", textAlign: "center" }}
              >
                Aditya Chandra Shrestha
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "230px",
              height: "230px",
              bgcolor: "#323232",
            }}
            elevation={0}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={<MilitaryTechIcon sx={{ color: "gold" }} />}
              >
                <Avatar sx={{ bgcolor: "black" }}>AS</Avatar>
              </Badge>
              <Typography
                sx={{ color: "white", fontSize: "18px", textAlign: "center" }}
              >
                Aditya Chandra Shrestha
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "230px",
              height: "230px",
              bgcolor: "#323232",
            }}
            elevation={0}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={<MilitaryTechIcon sx={{ color: "gold" }} />}
              >
                <Avatar sx={{ bgcolor: "black" }}>AS</Avatar>
              </Badge>
              <Typography
                sx={{ color: "white", fontSize: "18px", textAlign: "center" }}
              >
                Aditya Chandra Shrestha
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "230px",
              height: "230px",
              bgcolor: "#323232",
            }}
            elevation={0}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={<MilitaryTechIcon sx={{ color: "gold" }} />}
              >
                <Avatar sx={{ bgcolor: "black" }}>AS</Avatar>
              </Badge>
              <Typography
                sx={{ color: "white", fontSize: "18px", textAlign: "center" }}
              >
                Aditya Chandra Shrestha
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "230px",
              height: "230px",
              bgcolor: "#323232",
            }}
            elevation={0}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={<MilitaryTechIcon sx={{ color: "gold" }} />}
              >
                <Avatar sx={{ bgcolor: "black" }}>AS</Avatar>
              </Badge>
              <Typography
                sx={{ color: "white", fontSize: "18px", textAlign: "center" }}
              >
                Aditya Chandra Shrestha
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "230px",
              height: "230px",
              bgcolor: "#323232",
            }}
            elevation={0}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={<MilitaryTechIcon sx={{ color: "gold" }} />}
              >
                <Avatar sx={{ bgcolor: "black" }}>AS</Avatar>
              </Badge>
              <Typography
                sx={{ color: "white", fontSize: "18px", textAlign: "center" }}
              >
                Aditya Chandra Shrestha
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default topBloggersPage;
