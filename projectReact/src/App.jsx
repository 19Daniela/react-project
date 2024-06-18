import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import { useEffect } from 'react';
import Admin from './components/admin/admin';
import ServiceArray from './components/service/serviceArray';
import MeetingArray from './components/meeting/meetingArray';
import User from '../src/components/user/user';
import serviceStore from './components/store/serviceStore';
import meetingStore from './components/store/meetingStore';
import store from './components/store/store';

function App() {

  useEffect(()=>{
    //  meetingStore.sendDataToServer;
     serviceStore.sendDataToServer();
  },[]);

  return (
    <> 
    {console.log("app")}
    <BrowserRouter>
     <Routes>
       <Route path="/admin" element={<Admin/>}/>
       <Route path="/admin/services" element={<ServiceArray/>}/>
       <Route path="/admin/meeting" element={<MeetingArray/>}/>
       <Route path="/" element={<User/>}/>
       {/* delete those after */}
       <Route path='/services' element={<ServiceArray/>}/>
       <Route path='/meeting' element={<MeetingArray/>}/>
       
     </Routes>
   </BrowserRouter>
    </>
    )
}

export default App
