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
import { Divider, Tooltip } from '@mui/material';
import Alert from '@mui/material/Alert';

const Service = (observer(() => {
  useEffect(() => {
    handleClickOpen();
  }, []);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');
  const [id, setId] = useState(3);
  const [priceH, setPriceH] = useState(false);

  useEffect(() => {
    setId(id+1)

  }, []);

  // const validatePrice = (price) => {
  //   return !isNaN(price);
  // };

//   const handlePrice = (e) =>{
//     if(!validatePrice)
//     setPriceH(true);
//   setPrice(e.target.value)
// }
  
  const save = () => {
    setOpen(false);
    console.log(id, name, description, price, duration);
    serviceStore.addServiceData(id, name, description, price, duration);
    setId(id+1);
  }

  const closing = () => {
    setOpen(false);
  }

  return (<>
    <React.Fragment>
      {/* <Tooltip title="add"/> */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
        }}
      >
        <DialogTitle>add service</DialogTitle>
        <DialogContent dividers>
        {/* <Typography  gutterBottom> */}
         name <br /> <TextField id="nameId" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} /> <br />
         description <br /> <TextField id="descId"  variant="outlined" value={description} onChange={(e) => setDescription(e.target.value)} /> <br />
         price <br /> <TextField id="priceId" variant="outlined" value={price}  onChange={(e) => setPrice(e.target.value)} /> <br />
         duration <br /> <TextField type="number" id="durationId" variant="outlined" value={duration} onChange={(e) => setDuration(e.target.value)} /> 
        {/* </Typography> */}
        </DialogContent>
        <Button sx={{width:25}} variant="contained" disableElevation onClick={save}> save  </Button>
        <Button sx={{width:25}} variant="contained" disableElevation onClick={closing}>cancel</Button>
        {priceH && <Alert>use number!</Alert>}
      </Dialog>
      <Button variant="outlined" onClick={handleClickOpen}>
      <AddCircleIcon/>
        add service
      </Button>
      <Divider/>
    </React.Fragment>
    {/* <Alert>this date already taken!</Alert> */}
  </>)
}))
export default Service;

