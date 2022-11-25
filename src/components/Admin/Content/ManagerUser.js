import ModalCreate from "./ModalCreate";
import './ModalCreate.scss'

const ManagerUser =() =>{
    return(
        <div className="manage-user-container">
            <div className="manage-user-title">

            </div>
            <div className="user-content">
                <div>
                   <button>Add New User</button>
                </div>
                <div>
                    Table User
                </div>
                <ModalCreate/>
            </div>
        </div>
    )
}
export default ManagerUser