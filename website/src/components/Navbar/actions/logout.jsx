import {auth} from '../../Firebase/firebase-config';
import toastMsg from '../../Toast';
import {navigate} from "gatsby"


const logout = {};


logout.logout = ()=>{
   auth.signOut().then(()=>{
       toastMsg.infoToast("Sesión finalizada.")
       localStorage.removeItem('user');
       localStorage.removeItem('roles');
       navigate('/login');
   })
};

export default logout;
