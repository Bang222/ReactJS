import './App.scss';
import ContainnerUser from './components/ContainerUser'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <ContainnerUser/>
            </header>
            <ToastContainer/>
        </div>
    );
}

export default App;
