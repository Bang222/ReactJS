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
    const [Image,SetImage] = useState('');


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
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Role</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>User</option>
                                    <option>Admin</option>
                                </Form.Select>
                            </Form.Group>
                            <div className="col-md-12 label-upload" >
                                <label className="form-label content-label-upload" htmlFor='labelUpload'
                                >  <FcPlus/> Upload Image</label>
                                <input type='file' hidden id='labelUpload' />
                            </div>
                            <div className="col-md-12 preview-image ">
                                <span className="content-preview-image"> Preview Image</span>
                                <img  src={timer}/>
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