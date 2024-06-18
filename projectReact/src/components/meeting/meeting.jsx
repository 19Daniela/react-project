import React from "react";
import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import meetingStore from "../store/meetingStore";
import serviceStore from "../store/serviceStore";
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import Dialog from '@mui/material/Dialog';
import { DialogActions, Divider } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Alert from '@mui/material/Alert';

const Meeting = observer(() => {

  useEffect(() => {
    handleClickOpen();
    console.log("meeting");
  }, []);

  const [open, setOpen] = useState(false);
  const [serviceType, setServiceType] = useState("");
  const [date, setDate] = useState(" ");
  const [clientName, setClientName] = useState(" ");
  const [clientPhone, setClientPhone] = useState(" ");
  const [clientEmail, setClientEmail] = useState(" ");
  const [id, setId] = useState(2);

  useEffect(() => {
    setId(id+1)
      console.log("ids"+id+" 1");
  }, []);

  const handleChange = (event) => {
    setServiceType(event.target.value)
  }

  const handleClose = () => { //closing the service option
    setOpen(false);
    // setIsOpen(false);
  }

  const handleClickOpen = () => { //open the service option
    setOpen(true);
  }

  const save = () => {
    console.log(id, serviceType, date, clientName, clientPhone, clientEmail);
    meetingStore.addMeeting(id, serviceType, date, clientName, clientPhone, clientEmail);
    setId(id+1);
  }  

  const closing = () => {
    setOpen(false);
  }

  return (<>
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
        }}
      >
        <DialogTitle>Add appointment  <AccessTimeIcon /></DialogTitle>
        <DialogContent dividers>
          {/* <Typography gutterBottom> */}
          <FormControl sx={{ width: 200 }}> {/*  the type service */}
            <InputLabel id="demo-simple-select-label">service name</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={serviceType}
              label="service name"
              onChange={handleChange}
            >
              {serviceStore.tempServiceData?.map((_, i) => (
                <MenuItem value={serviceStore.tempServiceData[i].name}>{serviceStore.tempServiceData[i].name}</MenuItem>
              ))}
            </Select>
          </FormControl> <br />
          name <br /> <TextField id="outlined-basic" variant="outlined" value={clientName} onChange={(e) => setClientName(e.target.value)} /> <br />
          phone <br /> <TextField id="outlined-basic" variant="outlined" value={clientPhone} onChange={(e) => setClientPhone(e.target.value)} /> <br />
          email <br /> <TextField id="outlined-basic" variant="outlined" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} /> <br />
          date <br /> <TextField type="datetime-local" id="outlined-basic" variant="outlined" value={date} onChange={(e) => setDate(e.target.value)} /> <br />
          {/* </Typography> */}
        </DialogContent>
        <DialogActions>
          <Button variant="contained" disableElevation onClick={save}>save</Button>
          <Button variant="contained" disableElevation onClick={closing}>cancel</Button>
        </DialogActions>
      </Dialog> <br />
      <Button variant="outlined" onClick={handleClickOpen}>
        add appointment
      </Button>
      <Divider />
    </React.Fragment>
    {/* <Alert>worng email!</Alert> */}

  </>)
})
export default Meeting