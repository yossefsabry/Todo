import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import CopyWrite from "../components/CopyWrite";




// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Register() {
  let navigate = useNavigate();
  const usernameRef = useRef(null);
  const ageRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);

  const ClickRegisterButton = async(event, age, username, email, password) => {
    event.preventDefault();
    const data = new FormData();
    data.append("username", username);
    data.append("age", age);
    data.append("email", email);
    data.append("password", password);
    navigate("/home");
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register Now
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              inputRef={usernameRef}
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="age"
              label="user age"
              inputRef={ageRef}
              name="age"
              autoComplete="age"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              inputRef={emailRef}
              name="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              inputRef={passwordRef}
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={(event) => {
                ClickRegisterButton(event, ageRef.current.value, usernameRef.current.value,
                  emailRef.current.value, passwordRef.current.value)
              }}
            >
              Register
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/sign" variant="body2">
                  {"have an account Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <CopyWrite sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
