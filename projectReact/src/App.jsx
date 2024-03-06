import './App.css';
import Admin from './components/admin/admin';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import ServiceArray from './components/service/serviceArray';
import MeetingArray from './components/meeting/meetingArray';
import User from '../src/components/user/user';

function App() {

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
