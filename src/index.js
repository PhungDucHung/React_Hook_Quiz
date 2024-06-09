import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import User from './component/User/User.js';
import Admin from './component/Admin/Admin.js';
import HomePage from './component/Home/HomePage.js';
import SideBar from './component/Admin/SideBar.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<HomePage/>}/>
            <Route path="/users" element={<User />} />
        </Route>   
        <Route path="/admins" element={<Admin />} />

      </Routes>
    </BrowserRouter>
    {/* </React.StrictMode> */}
  </Provider>
); 

reportWebVitals();
