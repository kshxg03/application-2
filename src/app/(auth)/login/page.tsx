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
  colors,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [userNameEmptyError, setUserNameEmptyError] = useState("");
  const [passwordEmptyError, setPasswordEmptyError] = useState("");
  const [isUserNameEmpty, setIsUserNameEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);

  async function HandleSignin() {
    // Resetting error states
    setErrorMessage("");
    setIsUserNameEmpty(false);
    setIsPasswordEmpty(false);

    try {
      const validateForm: ReturnProps = validationForm(userName, password);
      if (validateForm.isEmpty) {
        if (validateForm.forUserName) {
          setIsUserNameEmpty(true);
          setUserNameEmptyError(validateForm.forUserName);
        }
        if (validateForm.forPassword) {
          setIsPasswordEmpty(true);
          setPasswordEmptyError(validateForm.forPassword);
        }
      } else {
        const response = await LoginCommon({ userName, password });
        console.log("This is Response: ", response.Data);
        // save to cookie.
      }
    } catch (error) {
      if (error instanceof CustomError) {
        console.log("This is Error in fetch: ", error._error);
        if (error._error.Message instanceof Array) {
          //This is not required since every thing is handle by frontend
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
          Sign in to your
        </Typography>
        <Typography
          variant="h2"
          gutterBottom
          sx={{ marginTop: 2, marginBottom: 2 }}
        >
          Bislerium Account
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          paddingRight: 0,
        }}
      >
        <Paper
          elevation={0}
          sx={{
            border: "1px solid #cccccc",
            p: 7,
            maxWidth: 450,
            margin: "0 auto",
            backgroundColor: "#f1efea",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Typography variant="h4" sx={{ mb: 2 }}>
              Sign in
            </Typography>
          </Box>
          {errorMessage}
          <TextField
            margin="normal"
            required
            fullWidth
            variant="standard"
            label="Username"
            error={isUserNameEmpty}
            helperText={isUserNameEmpty ? "Username Required" : ""}
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
            variant="standard"
            label="Password"
            error={isPasswordEmpty}
            helperText={isPasswordEmpty ? "Password Required" : ""}
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
              if (e.target.value.trim() !== "") {
                setPasswordEmptyError("");
              }
            }}
          />
          <Typography variant="body2" sx={{ mt: 1, textAlign: "right" }}>
            <Link style={{ color: "blue" }} href="/forgot-password">
              Forgot Password?
            </Link>
          </Typography>
          <Button
            type="submit"
            disableElevation
            fullWidth
            variant="contained"
            onClick={HandleSignin}
            sx={{
              mt: 4,
              backgroundColor: "black",
              "&:hover": { backgroundColor: "#303030" },
            }}
          >
            Sign In
          </Button>
          <Typography variant="body2" sx={{ mt: 5 }}>
            Dont have an account?{" "}
            <Link style={{ color: "blue" }} href="/register">
              Register
            </Link>
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default LoginPage;
