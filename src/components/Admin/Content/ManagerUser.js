import ModalCreate from "./ModalCreate";
import './ModalCreate.scss'
import {useState} from "react";

const ManagerUser =() =>{
    const [ShowCreateUser,SetShowCreateUser]=useState(false)
    return(
        <div className="manage-user-container">
            <div className="manage-user-title">

            </div>
            <div className="user-content">
                <div>
                   <button className="btn btn-primary"
                   onClick={()=>SetShowCreateUser(true)}
                   >Add New User</button>
                </div>
                <div>
                    Table User
                </div>
                <ModalCreate
                show={ShowCreateUser}
                setShow={SetShowCreateUser}
                />
            </div>
        </div>
    )
}
export default ManagerUser