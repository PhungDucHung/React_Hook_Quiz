import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import User from './component/User/User.js';
import Admin from './component/Admin/Admin.js';
import HomePage from './component/Home/HomePage.js';
import SideBar from './component/Admin/SideBar.js';
import ManageUser from './component/Admin/content/ManageUser.js';
import DashBoard from './component/Admin/content/DashBoard.js';
import Login from './component/Auth/Login.js';
import App from './App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './component/Auth/Register.js';
import ListQuiz from './component/User/ListQuiz.js';
import DetailQuiz from './component/User/DetailQuiz.js';
import ManageQuiz from './component/Admin/content/Quiz/ManageQuiz.js';


const NotFound = () =>{
    return (
        <div className='alert alert-danger mt-3 container'>
            404 Not Found data with your current URL
        </div>
    )
}

const Layout = (props ) =>{
    return(
        <>
        <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<HomePage/>}/>
            <Route path="users" element={<ListQuiz />} />
        </Route>
        <Route path="/quiz/:id" element={<DetailQuiz />} />
        <Route path="admins" element={<Admin />}>
            <Route index element={<DashBoard/>}/>
            <Route path="manage-users" element={<ManageUser />} />
            <Route path="manage-quizzes" element={<ManageQuiz />} />

        </Route>

        <Route path="/login" element={<Login/>}></Route>
        <Route path="/Register" element={<Register/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
                <ToastContainer />
     </>
    )
}
export default Layout;