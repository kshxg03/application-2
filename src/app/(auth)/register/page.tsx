import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
} from "@mui/material";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <Container
      component="main"
      maxWidth="xl"
      sx={{ display: "flex", justifyContent: "space-between" }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: 15,
        }}
      >
        <Typography variant="h2" gutterBottom sx={{ marginBottom: 2 }}>
          Sign-up and explore
        </Typography>
        <Typography
          variant="h2"
          gutterBottom
          sx={{ marginTop: 2, marginBottom: 2 }}
        >
          the world of
        </Typography>
        <Typography variant="h2" gutterBottom sx={{ marginTop: 2 }}>
          Blogs...
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          paddingRight: 15,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            maxWidth: 400,
            margin: "0 auto",
            backgroundColor: "#f1efea",
          }}
        >
          <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
            Register
          </Typography>
          <TextField margin="normal" required fullWidth label="Username" />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              backgroundColor: "black",
              "&:hover": { backgroundColor: "black" },
            }}
          >
            Sign Up
          </Button>
          <Typography variant="body2" sx={{ mt: 5 }}>
            Already have an account?{" "}
            <Link style={{ color: "blue" }} href="/login">
              Sign in
            </Link>
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default RegisterPage;
