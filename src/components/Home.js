import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

const Home = () => {
  const navigate = useNavigate();

  const Login = () => {
    navigate("/login");
  };
  const Signup = () => {
    navigate("/register");
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Home
            </Typography>
            <Button onClick={Login} color="inherit">
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Button size="large" sx={{ ml: 2 }} onClick={Signup} variant="outlined">
          Sign up
        </Button>
      </Grid>
    </>
  );
};

export default Home;
