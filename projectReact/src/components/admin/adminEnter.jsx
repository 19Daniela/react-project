import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import ServiceArray from '../service/serviceArray';
import MeetingArray from '../meeting/meetingArray';
import EditBusinessDetails from '../businessDetails/editBusinessDetails';
import Service from '../service/service';
import User from '../user/user';
import { Button, Divider, Tooltip } from '@mui/material';
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
        setOpenM(false);
        setOpenService(true);
    }

    const openMeeting = () => {
        setOpenService(false);
        setOpenM(true);
    }

    // const handleClose = () => {
    //     setOpenService(false);
    // }

    const handleLogout = () => {
        navigate('/');
        setLogout(true);
    }

    const addService = () => {
        setShowServiceAdd(false);
        setServiceAdd(true);
    }

    return (<>
        <div className="loginButton">
            <Tooltip title="logout">
                <Button onClick={handleLogout}>logout <LogoutIcon></LogoutIcon></Button><br />
            </Tooltip>
        </div>
        <Tooltip title="meeting">
            <Button onClick={openMeeting}>meeting</Button>
        </Tooltip>
        <Tooltip title="services">
            <Button onClick={openServices}>services</Button>
        </Tooltip>

        <header> <EditBusinessDetails /> </header>
        {showServiceAdd &&
            <Tooltip title="add">
                <Button onClick={addService}><AddCircleIcon />add service</Button>
            </Tooltip>
        }

        {logout && <User />}
        {openService && <ServiceArray />}
        {openM && <MeetingArray />}
        {serviceAdd && <Service />}
        <Divider />
    </>)
})
export default AdminEnter;