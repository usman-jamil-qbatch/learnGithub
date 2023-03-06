import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { editIntrest } from "../redux/slices/intrestSlice";
import { useDispatch } from "react-redux";

export default function FormDialog({ open, handleOpen, data }) {
  const dispatch = useDispatch();
  const [newData, setNewData] = useState(data);

  useEffect(() => {
    setNewData(data);
  }, [data]);
  const handleChange = (e) => {
    setNewData((prevValue) => ({
      ...prevValue,
      data: {
        ...prevValue.data,
        intrest: e.target.value,
      },
    }));
  };
  const handleUpdate = () => {
    dispatch(editIntrest(newData));
    handleOpen(false);
  };
  return (
    <div>
      <Dialog open={open} onClose={() => handleOpen(false)}>
        <DialogContent>
          <TextField
            onChange={handleChange}
            value={newData?.data.intrest ? newData?.data.intrest : ""}
            autoFocus
            margin="dense"
            id="name"
            label="Intrest"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdate}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
