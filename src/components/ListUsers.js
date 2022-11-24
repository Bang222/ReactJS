import React from "react";
import './ListUsers.scss'

const ListUsers = (props) => {
    const {Users,SetUsers} = props
    return (
        <>
            <table className="table_list-Users table table-hover">
                <thead className="table_list-Users--thead">
                <tr>
                    <th className="table-list_Users--th">stt</th>
                    <th className="table-list_Users--th">First Name</th>
                    <th className="table-list_Users--th">Last Name</th>
                    <th className="table-list_Users--th">Age</th>
                    <th className="table-list_Users--th">Country</th>
                    <th className="table-list_Users--th">Status</th>
                </tr>
                </thead>
                <tbody className="table_list-Users--tbody">
                {Users && Users.length > 0 &&
                    Users.map((item, index) => {
                        return (
                            <tr key={`tableUser ${index}`}>
                                <td className="table-list_Users--td">{index + 1}</td>
                                <td className="table-list_Users--td">{item.firstName}</td>
                                <td className="table-list_Users--td">{item.lastName}</td>
                                <td className="table-list_Users--td">{item.Age}</td>
                                <td className="table-list_Users--td">{item.country}</td>
                                <td className="table-list_Users--td">
                                    <button className="delete-user btn btn-danger" onClick={
                                        (event) => props.HandleDeleteUsers(item.id)
                                    }>Delete
                                    </button>
                                    <button className='edit-user btn btn-warning'
                                    onClick={() => props.btnClickEditUser(item)}
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
                {Users && Users.length === 0 &&
                    <tr>
                        <td colSpan={'4'}>not found Data</td>

                    </tr>
                }
                </tbody>
            </table>
        </>
    )
}
export default ListUsers