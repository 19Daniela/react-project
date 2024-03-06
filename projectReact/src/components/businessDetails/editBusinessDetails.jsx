import React from "react";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import store from "../store/store";
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import Dialog from '@mui/material/Dialog';

const EditBusinessData = (observer(() => {

  useEffect(() => {
    async function getData() {
      await store.getList();
    }
    if (store.isLogin) {
      getData();
      setShowEdit(true);
    }
  }, []);

  const [opens, setOpens] = useState(false);

  const [showEdit, setShowEdit] = useState(false);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleOpen = () => {
    if (store.isLogin)
      setOpens(true);
  }

  const handleClose = () => {
    setOpens(false);
  }

  const save = (name, address, phone, owner, logo, description) => {
    store.saveDetails(name, address, phone, owner, logo, description);
    handleClose();
  }

  const [name, setName] = useState(store.tempBusinessData.name);
  const [address, setAddress] = useState(store.tempBusinessData.address);
  const [phone, setPhone] = useState(store.tempBusinessData.phone);
  const [owner, setOwner] = useState(store.tempBusinessData.owner);
  const [logo, setLogo] = useState(store.tempBusinessData.logo);
  const [description, setDescription] = useState(store.tempBusinessData.description);

  return (<>
    <Box>
      <header>
        <h2> Business details: </h2>
        <img src="../src/assets/logo.png" alt="" width="190px" />
        <br />
        <PersonIcon /> {store.tempBusinessData.owner}
        <PhoneIcon /> {store.tempBusinessData.phone}
        <LocationOnIcon /> {store.tempBusinessData.address}
        {store.tempBusinessData.description} <br />

    -
      </header>
    </Box>

    {opens &&
      <div>
        <React.Fragment>
          <Button variant="outlined" onClick={handleClickOpen}>
            Edit<EditIcon />
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
              component: 'form',
            }}
          >
            <DialogTitle>set business data</DialogTitle>
            <DialogContent>
            <Typography gutterBottom>
            <TextField id="outlined-basic" label="business name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
            <TextField id="outlined-basic" label="adress" variant="outlined" value={address} onChange={(e) => setAddress(e.target.value)} />
            <TextField id="outlined-basic" label="phone" variant="outlined" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <TextField id="outlined-basic" label="name owner" variant="outlined" value={owner} onChange={(e) => setOwner(e.target.value)} />
            <TextField id="outlined-basic" label="description" variant="outlined" value={description} onChange={(e) => setDescription(e.target.value)} />
          </Typography>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" disableElevation onClick={save}>
            save
          </Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>

        {/* <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          set business details
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}>
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            <TextField id="outlined-basic" label="business name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
            <TextField id="outlined-basic" label="adress" variant="outlined" value={address} onChange={(e) => setAddress(e.target.value)} />
            <TextField id="outlined-basic" label="phone" variant="outlined" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <TextField id="outlined-basic" label="name owner" variant="outlined" value={owner} onChange={(e) => setOwner(e.target.value)} />
            <TextField id="outlined-basic" label="description" variant="outlined" value={description} onChange={(e) => setDescription(e.target.value)} />
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" disableElevation onClick={save}>
            save
          </Button>
        </DialogActions> */}
      </div >
    }
  </>)
}))
export default EditBusinessData