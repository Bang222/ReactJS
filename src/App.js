import './App.scss';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import {Outlet} from "react-router-dom";

const App = () => {
    return (
        <>
            <div className="app-container">
                <div className="header-container">
                    <Header/>
                </div>
                <div className="main-container">
                    <div className="sidebar-container">

                    </div>
                    <div className="app-content">
                        <Outlet/>
                    </div>
                </div>
                <ToastContainer/>
            </div>
        </>
    );
}

export default App;
