import * as React from 'react';
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import meetingStore from "../store/meetingStore";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const MeetingArray = observer(() => {

  // useEffect(() => {
  //   meetingStore.getList();
  // })

  // function createData(id, serviceType, dateTime, clientName, clientPhone, clientEmail) {
  //   return { id, serviceType, dateTime, clientName, clientPhone, clientEmail };
  // }

  const rows = [
    (meetingStore.tempMeetingData.id,
      meetingStore.tempMeetingData.serviceType,
      meetingStore.tempMeetingData.dateTime,
      meetingStore.tempMeetingData.className,
      meetingStore.tempMeetingData.clientPhone,
      meetingStore.tempMeetingData.clientEmail)
  ];

  return (<>
    {console.log("meeting arr")}
    {meetingStore.tempMeetingData.map((meeting) =>
      <div key={meeting.id}>
        {/* <Card className="serviceArr" sx={{ maxWidth: 360 }}>
          <CardContent>
            <Typography variant="p" color="text.secondary">
              {meeting.clientName}
              {meeting.clientPhone}
              {meeting.clientPhone}
              {meeting.dateTime} */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Phone</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.id}</TableCell>
                  <TableCell align="right">{row.clientName}</TableCell>
                  <TableCell align="right">{row.clientPhone}</TableCell>
                  <TableCell align="right">{row.clientEmail}</TableCell>
                  <TableCell align="right">{row.dateTime}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {console.log("card")}
        {/* </Typography>
          </CardContent>
        </Card> */}
       </div>
     )} 
  </>)
})
export default MeetingArray