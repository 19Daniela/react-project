import * as React from 'react';
import { useEffect, useState } from "react"
import { observer } from "mobx-react-lite";
import serviceStore from "../store/serviceStore";
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Service = (observer(() => {
  useEffect(() => {
    handleClickOpen();
  }, []);

  const [open, setOpen] = React.useState(false);

  // const [openService, setOpenService] = useState(false);

  // const handleOpenService = () => {
  //   setOpenService(true);
  // }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [duration, setDuration] = useState();

  const save = () => {
    setOpen(false);
    serviceStore.addServiceData( name, description, price, duration);
  }

  return (<>
    <React.Fragment>
    <Button variant="outlined" onClick={handleClickOpen}>
      <AddCircleIcon/>
        add service
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
        }}
      >
        <DialogTitle>add service</DialogTitle>
        <DialogContent dividers>
        <Typography  gutterBottom>
          <TextField id="nameId" label="name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} /> <br />
          <TextField id="descId" label="description" variant="outlined" value={description} onChange={(e) => setDescription(e.target.value)} /> <br />
          <TextField id="priceId" label="price" variant="outlined" value={price}  onChange={(e) => setPrice(e.target.value)} /> <br />
          <TextField id="durationId" label="duration" variant="outlined" value={duration} onChange={(e) => setDuration(e.target.value)} /> <br />
        </Typography>
        </DialogContent>
        <Button variant="contained" disableElevation onClick={save}> save  </Button>
      </Dialog>
    </React.Fragment>
  </>)
}))
export default Service;

