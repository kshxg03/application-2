import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";

const addUsersPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        maxWidth: "400px",
        marginLeft: "700px",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "200px",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          border: "2px solid #cccccc",
          p: 7,
          maxWidth: 450,
          margin: "0 auto",
          backgroundColor: "#f4f4f4",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography variant="h4" sx={{ mb: 2 }}>
            Add Admin
          </Typography>
        </Box>
        <TextField
          margin="normal"
          required
          fullWidth
          variant="standard"
          label="Username"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          variant="standard"
          label="Password"
        />
        <Button
          type="submit"
          disableElevation
          fullWidth
          variant="contained"
          sx={{
            mt: 4,
            backgroundColor: "black",
            borderRadius: "5",
            "&:hover": { backgroundColor: "#303030" },
          }}
        >
          Add
        </Button>
      </Paper>
    </Box>
  );
};

export default addUsersPage;
