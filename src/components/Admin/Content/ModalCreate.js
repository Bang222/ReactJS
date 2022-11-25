import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Col, Form, Row} from "react-bootstrap";
import timer from "../../../assets/images/Tim.jpg"
import { FaBars } from 'react-icons/fa';
import { FcPlus } from 'react-icons/fc';

const ModalCreate= ()=> {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // -----------------------Declare state----------------------------------
    const [Email,SetEmail] = useState('');
    const [Password,SetPassword] = useState('');
    const [UserName,SetUserName] = useState('');
    const [Role,SetRole] = useState('User');
    const [Image,SetImage] = useState('');
    const[PreviewImage,SetPreviewImage] = useState('');

    const hanleUploadImage  =(event) =>{
        if(event.target && event.target.files && event.target.files[0]) {
            SetPreviewImage(URL.createObjectURL(event.target.files[0]))
            SetImage(event.target.files[0])
            return;
        }
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                backdrop='static'
                className='modal-create-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>ADD NEW USER </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" value={Email}
                                       onChange={(event)=> SetEmail(event.target.value)}
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={Password}
                                              onChange={(event)=> SetPassword(event.target.value)}
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control type="text" value={UserName}
                                       onChange={(event)=> SetUserName(event.target.value)}
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Role</Form.Label>
                                <Form.Select defaultValue="Role"
                                             onChange={(event)=> SetRole(event.target.value)}>
                                    <option value='User'>User</option>
                                    <option value='Admin'>Admin</option>
                                </Form.Select>
                            </Form.Group>
                            <div className="col-md-12 label-upload" >
                                <label className="form-label content-label-upload" htmlFor='labelUpload'
                                >  <FcPlus/> Upload Image</label>
                                <input type='file' hidden id='labelUpload'
                                onChange={(event) => hanleUploadImage(event)}
                                />
                            </div>
                            <div className="col-md-12 preview-image ">
                                {PreviewImage ?
                                    <img  src={PreviewImage}/>
                                    :
                                    <span className="content-preview-image"> Preview Image</span>
                                }
                            </div>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCreate