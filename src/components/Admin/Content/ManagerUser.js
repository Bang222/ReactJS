import ModalCreate from "./ModalCreate";

const ManagerUser =() =>{
    return(
        <div className="manage-user-container">
            <div className="manage-user-title">

            </div>
            <div className="user-content">
                <div>
                   <button>Add New User</button>
                    <ModalCreate/>
                </div>
                <div>
                    Table User
                </div>
            </div>
        </div>
    )
}
export default ManagerUser