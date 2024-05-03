"use client";
import { CustomError } from "@/app/common/errors/custom.error";
import { LoginCommon } from "@/app/common/helper/login.request";
import {
  ReturnProps,
  validationForm,
} from "@/app/common/helper/login.validation";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [userNameEmptyError, setUserNameEmptyError] = useState("");
  const [passwordEmptyError, setPasswordEmptyError] = useState("");

  async function HandleLogin() {
    try {
      const validateForm: ReturnProps = validationForm(userName, password);
      if (validateForm.isEmpty) {
        if (validateForm.forUserName) {
          setUserNameEmptyError(validateForm.forUserName);
        }
        if (validateForm.forPassword) {
          setPasswordEmptyError(validateForm.forPassword);
        }
      } else {
        const response = await LoginCommon({ userName, password });
        console.log("This is Response: ", response.Data);
      }
    } catch (error) {
      if (error instanceof CustomError) {
        console.log("This is Error in fetch: ", error._error);
        if (error._error.Message instanceof Array) {
          //This is not require since every thing is handle by frontend
        }
        setErrorMessage(error._error.Message);
        console.log("This is Error: ", error._error.Message);
      }
    }
  }
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
          {errorMessage}
          <TextField
            margin="normal"
            required
            fullWidth
            placeholder={userNameEmptyError || "UserName"}
            onChange={(e) => {
              setUserName(e.target.value);
              if (e.target.value.trim() !== "") {
                setUserNameEmptyError("");
              }
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            placeholder={passwordEmptyError || "Password"}
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
              if (e.target.value.trim() !== "") {
                setPasswordEmptyError("");
              }
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={HandleLogin}
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
