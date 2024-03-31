import React from "react";
import { useState } from "react";
import store from '../store/store';
import { observer } from "mobx-react-lite";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AdminEnter from "../admin/AdminEnter";
import Box from '@mui/material/Box';
import LoginIcon from '@mui/icons-material/Login';
import { Dialog } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";

const Login = (observer(() => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [name, setName] = useState('');

  const [password, setPassword] = useState('');

  const handleLogin = () => {
    store.saveLogin(name, password);
    setName("")//we need to clear the input
    setPassword("")
  }

  return (<>
    <h2>To log in please enter details:</h2>
    {!store.isLogin &&
      <div>
        <Box
          component="form"
          sx={{'& > :not(style)': { m: 1, width: '25ch' }, }}
          noValidate
          autoComplete="off"
          >
         <TextField label="User name" variant="outlined" value={name} onChange={(e) => {setName(e.target.value)}} required/> <br />
         <TextField label="Password" variant="outlined" type="password" autoComplete="current-password" value={password} onChange={(e) => {setPassword(e.target.value)}} required/> <br />
         <Button onClick={handleLogin}>login<LoginIcon></LoginIcon></Button>
         {console.log(name, password)}
        </Box>
      </div>
    }
    {!store.flag && <Alert severity="error">user name or password is incorrect</Alert>}
    {store.degel && <AdminEnter />}
  </>);
}))
export default Login