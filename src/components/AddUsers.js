import React, {useState} from "react"
import {toast} from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';

const AddUsers = (props) => {
    const [firstName, SetfirstName] = useState('')
    const [lastName, SetlastName] = useState('')
    const [Age, SetAge] = useState('')
    const [country, Setcountry] = useState('')
    const HandleSubmitUser = (event) => {
        event.preventDefault();
        if (!firstName || !lastName || !Age || !country) {
            toast.error('missing information !! PLEASE CHECK')
            return;
        }
        props.HandleAddUsers({
            id: "bang" + Math.floor(Math.random() * 1001),
            firstName: firstName,
            lastName: lastName,
            Age: Age,
            country: country,
        })
        console.log("Check submit")
        Setcountry('')
        SetAge('')
        SetlastName('')
        SetfirstName('')
    }
    const HandleChangeFirstName = (event) => {
        SetfirstName(event.target.value)
    }
    const HandleChangelastName = (event) => {
        SetlastName(event.target.value)
    }
    const HandleChangeAge = (event) => {
        SetAge(event.target.value)
    }
    const HandleChangecountry = (event) => {
        Setcountry(event.target.value)
    }
    console.log('check InfoUser: ', props.state)
    return (
        <div>
            <form className="row g-3">
                <div className="col-md-6">
                    <label>First Name</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(event) => HandleChangeFirstName(event)}/>
                </div>
                <div className="col-md-6">
                    <label>Last Name</label>
                    <input type="text"
                           value={lastName}
                           onChange={(event) => HandleChangelastName(event)}/>
                </div>
                <div className="col-12">
                    <label> Age</label>
                    <input type="text"
                           value={Age}
                           onChange={(event) => HandleChangeAge(event)}/>
                </div>
                <div className="col-md-6">
                    <label>country
                        <select name="country"
                                value={country}
                                onChange={(event) => HandleChangecountry(event)}
                        >
                            <option value=''>Option</option>
                            <option value="Australia">Australia</option>
                            <option value="Canada">Canada</option>
                            <option value="USA">USA</option>
                        </select>
                    </label>
                </div>
                <div>
                <input type="submit" value="Submit"
                        onClick={(event) => HandleSubmitUser(event)}/>
                </div>
            </form>
        </div>
    )
}
export default AddUsers