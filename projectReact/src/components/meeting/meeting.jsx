import React from "react";
import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import meetingStore from "../store/meetingStore";
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import Dialog from '@mui/material/Dialog';
import { Card, DialogActions } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import serviceStore from "../store/serviceStore";

const Meeting = observer(() => {
  useEffect(() => {
    handleClickOpen();
    console.log("meeting");
  }, []);

  const [open, setOpen] = useState(false);

  const [serviceType, setServiceType] = useState('');
  const [date, setDate] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');

  const handleClose = () => { //closing the service option
    setOpen(false);
    props.setIsOpen(false);
  }

  const handleClickOpen = () => { //open the service option
    setOpen(true);
  }

  const save = () => {
    meetingStore.addMeeting(date, clientName, clientPhone, clientEmail);
  }

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  return (<>
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        add appointment
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
        }}
        >
        <DialogTitle>add appointment</DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <FormControl fullWidth>  {/* the type service */}
              <InputLabel id="demo-simple-select-label">service name</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={serviceType}
                label="service name"
                // onChange={handleChange}
                >
                <MenuItem value={10}>{serviceStore.tempServiceDate.name}</MenuItem>
              </Select>
            </FormControl>
            {/* <TextField id="outlined-basic" label="type" variant="outlined" value={serviceType} onChange={(e) => setServiceType(e.target.value)} /> <br /> */}
            <TextField id="outlined-basic" label="clientName" variant="outlined" value={clientName} onChange={(e) => setClientName(e.target.value)} /> <br />
            <TextField id="outlined-basic" label="clientPhone:" variant="outlined" value={clientPhone} onChange={(e) => setClientPhone(e.target.value)} /> <br />
            <TextField id="outlined-basic" label="clientEmail:" variant="outlined" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} /> <br />
            <TextField type="datetime-local" id="outlined-basic" label="date:" variant="outlined" value={date} onChange={(e) => setDate(e.target.value)} /> <br />

          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" disableElevation onClick={save}>save</Button>
        </DialogActions>
        {/* <Button variant="contained" disableElevation onClick={save}> save  </Button> */}
      </Dialog>
    </React.Fragment>
  </>)
})
export default Meeting