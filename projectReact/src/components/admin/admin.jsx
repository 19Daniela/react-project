import { observer } from 'mobx-react-lite';
import store from "../store/store";
import Login from '../login/login';
import AdminEnter from './AdminEnter';

const Admin = observer(()=>{
  console.log("admin");

    return(
        <>
          {/* if islogin is true than go to login */}
          {!store.isLogin ? <Login/> :<AdminEnter/>}         
        </>
    )
});
export default Admin


