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

const LoginPage = () => {
  return (
    <Container
      component="main"
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "stretch",
      }}
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
          Sign-in and continue
        </Typography>
        <Typography
          variant="h2"
          gutterBottom
          sx={{ marginTop: 2, marginBottom: 2 }}
        >
          your journey of
        </Typography>
        <Typography variant="h2" gutterBottom sx={{ marginTop: 2 }}>
          blogging...
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
            width: "80%",
            maxWidth: 400,
            margin: "0 auto",
            backgroundColor: "#f1efea",
          }}
        >
          <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
            Login
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
            Sign In
          </Button>
          <Typography variant="body2" sx={{ mt: 5 }}>
            Dont have an account?{" "}
            <Link style={{ color: "blue" }} href="/register">
              Sign up
            </Link>
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default LoginPage;
