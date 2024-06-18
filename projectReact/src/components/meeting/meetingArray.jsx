// import * as React from 'react';
import { observer } from "mobx-react-lite";
import Paper from '@mui/material/Paper';
import meetingStore from "../store/meetingStore";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const MeetingArray = observer(() => {

  return (<>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Type</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Phone</TableCell>
            <TableCell align="left">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {meetingStore.tempMeetingData.slice("").sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime)).map((meeting) => (
            <TableRow key={meeting.id}>
              <TableCell component="th" scope="row">
                {meeting.id}
              </TableCell>
              <TableCell align="left">{meeting.serviceType}</TableCell>
              <TableCell align="left">{meeting.dateTime}</TableCell>
              <TableCell align="left">{meeting.clientName}</TableCell>
              <TableCell align="left">{meeting.clientPhone}</TableCell>
              <TableCell align="left">{meeting.clientEmail}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>)
})
export default MeetingArray