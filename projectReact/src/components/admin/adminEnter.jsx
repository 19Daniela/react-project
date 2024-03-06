import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import ServiceArray from '../service/serviceArray';
import MeetingArray from '../meeting/meetingArray';
import EditBusinessDetails from '../businessDetails/editBusinessDetails';
import Service from '../service/service';
import User from '../user/user';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const AdminEnter = observer(() => {

    const navigate = useNavigate();
    
    const [openService, setOpenService] = useState(false);
   
    const [openM, setOpenM] = useState(false);

    const [logout, setLogout] = useState(false);

   const [serviceAdd, setServiceAdd] = useState(false);

   const [showServiceAdd, setShowServiceAdd] = useState(true);

    const openServices = () => {
        setOpenService(true);
    }

    const openMeeting = () => {
        setOpenM(true);
    }

    // const handleClose = () => {
    //     setOpenService(false);
    // }

    const handleLogout = () => {
        navigate('/');
        setLogout(true);
    }

    const addService = ()=>{
        setShowServiceAdd(false);
        setServiceAdd(true);
     }

    return (<>
        <Button onClick={handleLogout}>logout <LogoutIcon></LogoutIcon></Button><br />
        <Button onClick={openMeeting}>meeting</Button>
        <Button onClick={openServices}>services</Button>

        <header> <EditBusinessDetails/> </header>
        {showServiceAdd &&
        <Button onClick={addService}><AddCircleIcon />add service</Button>
        }

        {logout && <User/>}
        {openService && <ServiceArray/>}
        {openM && <MeetingArray/>}
        {serviceAdd && <Service/>}
    </>)
})
export default AdminEnter;