import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/authSlice";
import {
  getIntrests,
  createIntrest,
  deleteIntrest,
} from "../redux/slices/intrestSlice";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FormDialog from "./Dialog";
import { toast } from "react-toastify";

export default function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [details, setDetails] = useState();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState();

  const { intrests } = useSelector((state) => state.intrests);
  useEffect(() => {
    dispatch(getIntrests());
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setDetails(value);
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    if (!details) {
      alert("Add intrest first");
      return;
    }
    dispatch(createIntrest(details));
  };

  const handleOpen = (open) => {
    setOpen(open);
  };

  const handleEdit = (intrest) => {
    handleOpen(true);
    setData(intrest);
  };
  const handleDelete = (intrest) => {
    dispatch(deleteIntrest(intrest));
  };

  // const toastt = () => {
  //   toast.success("Success Notification !", {
  //     position: toast.POSITION.TOP_RIGHT,
  //   });
  // };
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
              Dashboard
            </Typography>
            <Button onClick={handleLogout} color="inherit">
              Log out
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "90vh" }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 360,
            maxHeight: 200,
            minHeight: 200,
            overflow: "auto",
            bgcolor: "background.paper",
          }}
        >
          <nav aria-label="main mailbox folders">
            <List>
              {intrests &&
                intrests.length > 0 &&
                intrests?.map((data, i) => (
                  <ListItem
                    secondaryAction={
                      <>
                        <IconButton
                          onClick={() => handleEdit({ data, inddex: i })}
                          edge="end"
                          aria-label="delete"
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => handleDelete(data.intrest)}
                          edge="end"
                          aria-label="delete"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </>
                    }
                    sx={{ border: 1, borderRadius: "8px" }}
                    key={i}
                    disablePadding
                  >
                    <ListItemButton>
                      <ListItemText primary={data.intrest} />
                    </ListItemButton>
                  </ListItem>
                ))}
            </List>
          </nav>
        </Box>
        <Box
          component="form"
          noValidate
          sx={{ mt: 1, width: "100%", maxWidth: 360 }}
        >
          <TextField
            onChange={handleChange}
            margin="normal"
            fullWidth
            id="intrests"
            label="Intrest"
            name="intrests"
            autoFocus
          />

          <Button
            type="submit"
            onClick={formSubmit}
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2 }}
          >
            Submit
          </Button>

          {/* <Button
            type="submit"
            onClick={toastt}
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2 }}
          >
            toast
          </Button> */}
          <Grid container></Grid>
        </Box>
      </Grid>
      <FormDialog open={open} data={data} handleOpen={handleOpen} />
    </>
  );
}
