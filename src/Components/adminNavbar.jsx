import { Link } from "react-router-dom";
import '../Styles/adminNavbar.css'

const AdminNavbar = () => {
    return ( 
           
             <div className="adminNavbar">
                <div className="header">
             <h1>ADMIN PORTAL</h1>
             </div>
                <div className="lists">
                <ul>
                    <div className="a"><li><Link to="/admin/">HOME</Link></li></div>
                    <div className="b"><li><Link to="/admin/addBooks">ADD BOOKS</Link></li></div>
                    <div className="c"><li><Link to='/admin/addUser'>ADD USERS</Link></li></div>
                    <div className="d"><li><Link to="/admin/bookList">BOOK LIST</Link></li></div>
                    <div className="e"><li><Link to="/admin/userList">USER LIST</Link></li></div>
                    <div className="f"><li><Link to="/">LOGOUT</Link></li></div>                
                </ul>
                </div>
             </div>
           
     );
}
 
export default AdminNavbar;