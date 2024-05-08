"use client";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import React from "react";

const topBlogsPage = () => {
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
          <Typography variant="h5">Top 10 blogs of all time.</Typography>
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
            gap: 5,
            flexWrap: "wrap",
          }}
        >
          <Card
            sx={{
              bgcolor: "#1a1a1a",
              color: "white",
              maxHeight: 300,
              maxWidth: 240,
              borderRadius: 1,
              "&:hover": {
                transform: "scale(1.02)",
                bgcolor: "#f2f2f2",
                color: "black",
              },
              transition: "all 0.2s ease-in-out",
            }}
            elevation={0}
          >
            <CardActionArea disableRipple>
              <CardMedia component="img" height="200" alt="green iguana" />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  This is a card title, hello world how are you?
                </Typography>
                <Typography fontSize={12}>I am Author</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              bgcolor: "#1a1a1a",
              color: "white",
              maxHeight: 300,
              maxWidth: 240,
              borderRadius: 1,
              "&:hover": {
                transform: "scale(1.02)",
                bgcolor: "#f2f2f2",
                color: "black",
              },
              transition: "all 0.2s ease-in-out",
            }}
            elevation={0}
          >
            <CardActionArea disableRipple>
              <CardMedia component="img" height="200" alt="green iguana" />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  This is a card title, hello world how are you?
                </Typography>
                <Typography fontSize={12}>I am Author</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              bgcolor: "#1a1a1a",
              color: "white",
              maxHeight: 300,
              maxWidth: 240,
              borderRadius: 1,
              "&:hover": {
                transform: "scale(1.02)",
                bgcolor: "#f2f2f2",
                color: "black",
              },
              transition: "all 0.2s ease-in-out",
            }}
            elevation={0}
          >
            <CardActionArea disableRipple>
              <CardMedia component="img" height="200" alt="green iguana" />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  This is a card title, hello world how are you?
                </Typography>
                <Typography fontSize={12}>I am Author</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              bgcolor: "#1a1a1a",
              color: "white",
              maxHeight: 300,
              maxWidth: 240,
              borderRadius: 1,
              "&:hover": {
                transform: "scale(1.02)",
                bgcolor: "#f2f2f2",
                color: "black",
              },
              transition: "all 0.2s ease-in-out",
            }}
            elevation={0}
          >
            <CardActionArea disableRipple>
              <CardMedia component="img" height="200" alt="green iguana" />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  This is a card title, hello world how are you?
                </Typography>
                <Typography fontSize={12}>I am Author</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              bgcolor: "#1a1a1a",
              color: "white",
              maxHeight: 300,
              maxWidth: 240,
              borderRadius: 1,
              "&:hover": {
                transform: "scale(1.02)",
                bgcolor: "#f2f2f2",
                color: "black",
              },
              transition: "all 0.2s ease-in-out",
            }}
            elevation={0}
          >
            <CardActionArea disableRipple>
              <CardMedia component="img" height="200" alt="green iguana" />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  This is a card title, hello world how are you?
                </Typography>
                <Typography fontSize={12}>I am Author</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              bgcolor: "#1a1a1a",
              color: "white",
              maxHeight: 300,
              maxWidth: 240,
              borderRadius: 1,
              "&:hover": {
                transform: "scale(1.02)",
                bgcolor: "#f2f2f2",
                color: "black",
              },
              transition: "all 0.2s ease-in-out",
            }}
            elevation={0}
          >
            <CardActionArea disableRipple>
              <CardMedia component="img" height="200" alt="green iguana" />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  This is a card title, hello world how are you?
                </Typography>
                <Typography fontSize={12}>I am Author</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              bgcolor: "#1a1a1a",
              color: "white",
              maxHeight: 300,
              maxWidth: 240,
              borderRadius: 1,
              "&:hover": {
                transform: "scale(1.02)",
                bgcolor: "#f2f2f2",
                color: "black",
              },
              transition: "all 0.2s ease-in-out",
            }}
            elevation={0}
          >
            <CardActionArea disableRipple>
              <CardMedia component="img" height="200" alt="green iguana" />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  This is a card title, hello world how are you?
                </Typography>
                <Typography fontSize={12}>I am Author</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              bgcolor: "#1a1a1a",
              color: "white",
              maxHeight: 300,
              maxWidth: 240,
              borderRadius: 1,
              "&:hover": {
                transform: "scale(1.02)",
                bgcolor: "#f2f2f2",
                color: "black",
              },
              transition: "all 0.2s ease-in-out",
            }}
            elevation={0}
          >
            <CardActionArea disableRipple>
              <CardMedia component="img" height="200" alt="green iguana" />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  This is a card title, hello world how are you?
                </Typography>
                <Typography fontSize={12}>I am Author</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              bgcolor: "#1a1a1a",
              color: "white",
              maxHeight: 300,
              maxWidth: 240,
              borderRadius: 1,
              "&:hover": {
                transform: "scale(1.02)",
                bgcolor: "#f2f2f2",
                color: "black",
              },
              transition: "all 0.2s ease-in-out",
            }}
            elevation={0}
          >
            <CardActionArea disableRipple>
              <CardMedia component="img" height="200" alt="green iguana" />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  This is a card title, hello world how are you?
                </Typography>
                <Typography fontSize={12}>I am Author</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default topBlogsPage;
