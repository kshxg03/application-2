import { Margin, Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, Container, IconButton, InputAdornment, Paper, TextField, Typography } from "@mui/material";

const ForgotPasswordPage = () => {
  return (
    <Container
      sx={{
        height: "100%",
        width: "100%",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: "150px",
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
              Verify E-mail
            </Typography>
          </Box>
          <TextField
            margin="normal"
            required
            fullWidth
            variant="standard"
            label="Email"
          />
          <Button
            type="submit"
            disableElevation
            fullWidth
            variant="contained"
            sx={{
              mt: 6,
              backgroundColor: "black",
              "&:hover": { backgroundColor: "#303030" },
            }}
          >
            Veirfy
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default ForgotPasswordPage;
