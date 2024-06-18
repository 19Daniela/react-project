import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { observer } from "mobx-react-lite";
import ServiceArray from '../service/serviceArray';
import EditBusinessData from "../businessDetails/editBusinessDetails";
import Meeting from '../meeting/meeting';
import Admin from "../admin/admin";
import LoginIcon from '@mui/icons-material/Login';
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import { Divider } from "@mui/material";

const User = observer(() => {

   const navigate = useNavigate();

   const [login, setLogin] = useState(false);

   const handleLogin = () => {
      setLogin(true);
      navigate('/admin');
   }

   const [showAddMeeting, setShowAddMeeting] = useState(true);

   const [addAppoitment, setAddAppoitment] = useState(false);

   const addMeeting = () => {
      setShowAddMeeting(false);
      setAddAppoitment(true);
   }

   return (<>
      <div className="loginButton" sx={{ innerWidth: 100 }}>
         <Tooltip title="login">
            <Button onClick={handleLogin}> login <LoginIcon /></Button>
         </Tooltip>
      </div>
      <Box> <EditBusinessData /> </Box>
      {showAddMeeting &&
         <Tooltip title="add">
            <Button onClick={addMeeting}>Add appointment</Button>
         </Tooltip>
      }
      <Divider />
      {addAppoitment && <Meeting />}
      {login && <Admin />}
      <ServiceArray />
      {console.log("user")}
   </>)
})
export default User