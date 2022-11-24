import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Admin from "./components/Admin/Admin";
import Users from "./components/Users/User";
import Homepage from "./components/Home/Homepage";
import Dashboash from "./components/Admin/Content/Dashboash";
import ManagerUser from "./components/Admin/Content/ManagerUser";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route index element={<Homepage/>}/>
                    <Route path="User" element={<Users/>}/>
                </Route>
                <Route path="Admin" element={<Admin/>}>
                    <Route index element={<Dashboash/>}/>
                    <Route path="Manager-User" element={<ManagerUser/>}/>
                </Route>
        </Routes>
    </BrowserRouter>
</React.StrictMode>
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
