import React, {useState} from "react"
import ListUsers from "./ListUsers"
import {toast} from "react-toastify";
import ModalCreate from "./ModalCreate";
import ModalUpdate from "./ModalUpdate";

const ContainerUser = (props) => {
    const [Users, SetUsers] = useState([
        {id: 'bang1', firstName: 'bang', lastName: 'Danh', Age: '22',images:'',country:'Canada'},
        {id: 'bang2', firstName: 'Danh', lastName: 'Pham', Age: '23',images:'',country:'Mexico'},
        {id: 'bang3', firstName: 'Pham', lastName: 'Cong', Age: '25',images:'',country:'Australia'},
        {id: 'bang4', firstName: 'Cong', lastName: 'Bang', Age: '26',images:'',country:'Canada'}
    ]);
    const [showModelCreateUser,setShowModelCreateUser] = useState(false)
    const [showModelEditUser,setShowModelEditUser] = useState(false)
    const [DataUpdateUser, SetDataUpdateUser] = useState({})
    const HandleAddUsers = (newUser) => {
        SetUsers([newUser, ...Users])
        toast.success('Addition User Success')
    }
    const btnClickEditUser=(user) =>{
        setShowModelEditUser(true)
        SetDataUpdateUser(user)
        SetDataUpdateUser(user.target.value)
    }
    const HandleDeleteUsers = (UserId) => {
    let ListUsersClone= [...Users]
        ListUsersClone = ListUsersClone.filter(item => item.id!==UserId)
        SetUsers(ListUsersClone)
        toast.success('Delete Users Success')
        console.log('check Delete',UserId)
    }
    return (
        <>
            <div className="btn btn-primary"
                 onClick={() =>setShowModelCreateUser(true) }>Add New User</div>
            <ModalCreate
                HandleAddUsers={HandleAddUsers}
                show ={showModelCreateUser}
                setShow={setShowModelCreateUser}/>
            <ListUsers
                Users={Users}
                SetUsers={SetUsers}
                HandleDeleteUsers={HandleDeleteUsers}
                btnClickEditUser ={btnClickEditUser}
            />
            <ModalUpdate
                show={showModelEditUser}
                setShow={setShowModelEditUser}
                DataUpdate={DataUpdateUser}
                HandleAddUsers={HandleAddUsers}
            />
        </>
    )
}
export default ContainerUser