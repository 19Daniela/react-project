import React from "react";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import store from "../store/store";
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
import Tooltip from '@mui/material/Tooltip';

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

  // const [opens, setOpens] = useState(false);

  const [showEdit, setShowEdit] = useState(false);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleOpen = () => {
    if (store.isLogin)
      setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
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
  <div>
    <Box>
      <header>
        <img src="../src/assets/logo.png" alt="" width="190px" />
        <br />
        <PersonIcon /> {store.tempBusinessData.owner}
        <PhoneIcon /> {store.tempBusinessData.phone}
        <LocationOnIcon /> {store.tempBusinessData.address}
        {store.tempBusinessData.description} <br />
      </header>
    </Box>

    {/* {opens && */}
      <div>
        <React.Fragment>
          <Tooltip title="edit">
          <Button onClick={handleClickOpen}>
            Edit<EditIcon />
          </Button>
          </Tooltip>
          <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
              component: 'form',
            }}
            >
            <DialogTitle>set business data</DialogTitle>
            <DialogContent sx={{}}>
            <Typography gutterBottom>
           business name <br /> <TextField id="outlined-basic" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} /> <br />
           adress <br /> <TextField id="outlined-basic" variant="outlined" value={address} onChange={(e) => setAddress(e.target.value)} /> <br />
           phone <br /> <TextField id="outlined-basic" variant="outlined" value={phone} onChange={(e) => setPhone(e.target.value)} /> <br />
           name owner <br /> <TextField id="outlined-basic" variant="outlined" value={owner} onChange={(e) => setOwner(e.target.value)} /> <br />
           description <br /> <TextField id="outlined-basic" variant="outlined" value={description} onChange={(e) => setDescription(e.target.value)} />
          </Typography>
            </DialogContent>
            <DialogActions>
              <Tooltip title="save">
              <Button variant="contained" disableElevation onClick={save}>
            save
          </Button>
          </Tooltip>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      </div >
    {/* } */}
  </div>
  </>)
}))
export default EditBusinessData