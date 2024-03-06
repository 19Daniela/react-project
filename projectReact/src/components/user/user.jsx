import React, { useState } from "react";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import { observer } from "mobx-react-lite";
import ServiceArray from '../service/serviceArray';
import EditBusinessData from "../businessDetails/editBusinessDetails";
import Meeting from '../meeting/meeting';
import Admin from "../admin/admin";
import LoginIcon from '@mui/icons-material/Login';
import Button from "@mui/material/Button";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import MeetingArray from "../meeting/meetingArray";


const User = observer(() => {

   const navigate = useNavigate();

   const [login, setLogin] = useState(false);

   const handleLogin = () => {
      setLogin(true);
      navigate('/admin');
      // <Admin />
   }

   const [showAddMeeting, setShowAddMeeting] = useState(true);

   const [addAppoitment, setAddAppoitment] = useState(false);

   const addMeeting = () => {
      setShowAddMeeting(false);
      setAddAppoitment(true);
   }

   return (<>
      <Button onClick={handleLogin}> login <LoginIcon/></Button>

      <Box> <EditBusinessData/> </Box>

      {showAddMeeting &&
      <Button onClick={addMeeting}>Add appointment</Button>
      }

      {addAppoitment && <Meeting/>}
      {login && <Admin/>}

       <ServiceArray/> 

      {console.log("user")}
   </>)
})
export default User