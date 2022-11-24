import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {toast} from "react-toastify";
import './ModalCreate.scss'

const ModalCreate = (props) => {
    const {show,setShow} = props
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //////////////////////////////////////////////////
    const [firstName, SetfirstName] = useState('')
    const [lastName, SetlastName] = useState('')
    const [Age, SetAge] = useState('')
    const [country, Setcountry] = useState('')
    const [image, SetImage] = useState('')
    const [previewImage, SetPreviewImage] = useState('')

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
    const HandleChangeImage = (event) =>{
        SetPreviewImage(URL.createObjectURL(event.target.files[0]))
        console.log('upload File',event.target.files[0])
    }

    return (
        <>
            {/*<Button variant="primary" onClick={handleShow}>*/}
            {/*    Add Users*/}
            {/*</Button>*/}

            <Modal show={show} onHide={handleClose} size='xl' backdrop='static'>
                <Modal.Header closeButton>
                    <Modal.Title>Add new User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="adduser--form">
                        <form className="row g-3">
                            <div className="col-md-6">
                                <label>First Name</label>
                                <input className="input--user--content"
                                    type="text"
                                    value={firstName}
                                    onChange={(event) => HandleChangeFirstName(event)}/>
                            </div>
                            <div className="col-md-6">
                                <label>Last Name</label>
                                <input type="text" className="input--user--content"
                                       value={lastName}
                                       onChange={(event) => HandleChangelastName(event)}/>
                            </div>
                            <div className="col-md-6">
                                <label> Age</label>
                                <input type="text" className="input--user--content"
                                       value={Age}
                                       onChange={(event) => HandleChangeAge(event)}/>
                            </div>
                            <div className="col-md-6">
                                <label>country
                                    <select name="country" className="input--user--content"
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
                            <div className="col-12">
                                <label htmlFor='lableUpload'> Up Load Image</label>
                                <input id='lableUpload'
                                       type="file" className="input--user--content"
                                       value={image} hidden
                                       onChange={(event) => HandleChangeImage(event)}/>
                            </div>
                            <div className="col-md-12">
                                {previewImage ?
                                    <img src={SetPreviewImage} alt='bang'/>
                                    :
                                    <span>Preview Image</span>
                                }
                            </div>
                            <div>
                                <input type="submit" value="Submit"
                                       onClick={(event) => HandleSubmitUser(event)}/>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={handleClose}
                    >
                        <button type="submit" value="save"
                                onClick={(event) => HandleSubmitUser(event)}>
                        save
                        </button>
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalCreate