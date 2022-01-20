import Axios from 'axios';
import Popup from 'reactjs-popup';
import React, { useEffect, useState } from 'react';
import JobApplicationList from './JobApplicationList';
import Card from "react-bootstrap/Card";
import ScriptTag from 'react-script-tag';

//import Modal from './ApplyAdv';

import { Button, Form, Modal } from 'react-bootstrap'


export default class Home extends React.Component {

    constructor() {
        super()
        this.state = {
            showMe: true,
            advLists: [],
            title: "",
            email: "",
            message: "",
            selectedIdAdv: "",
            selectedIdRedac: "",
            isOpen: false
        }

    }
    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    setSelectedIdAdv = (value) => {
        this.setState({
            selectedIdAdv: this.state.advLists[value].id_advertisement
        })
    }
    setSelectedIdRedac = (value) => {
        this.setState({
            selectedIdRedac: this.state.advLists[value].id_people
        })
    }

    setTitle = (value) => {
        this.setState({
            title: value
        })
    }
    setEmail = (value) => {
        this.setState({
            email: value
        })
    }
    setMessage = (value) => {
        this.setState({
            message: value
        })
    }

    operation(index) {
        this.setState({
            showMe: this.state.showMe === index ? null : index,
        })
    }

    submitForm = () => {
        Axios.post('http://localhost:3001/user/apply', {
            title: this.state.title,
            email: this.state.email,
            message: this.state.message,
            id_advertisement: this.state.selectedIdAdv,
            id_people: this.state.selectedIdRedac
        });
    }



    componentDidMount() {
        Axios.get(`http://localhost:3001/get/adv`)
            .then(res => {
                const advLists = res.data;
                this.setState({ advLists });
                console.log(advLists)
            })
    }



    render() {


        return (

            <div className="main-page">
                <div className="adv_container">
                    {this.state.advLists.map((val, key) => {
                        return (
                            <div className="card_" id={val.id_advertisement}>
                                <Card style={{ width: "100%" }}>
                                    <Card.Body>
                                        <Card.Title>{val.title}</Card.Title>
                                        <Card.Subtitle className="mb-3 text-muted">
                                            {val.city} | {val.compWebsite}
                                        </Card.Subtitle>
                                        <Card.Subtitle className="mb-3 text-muted">
                                            Salaire: {val.salaire}
                                    </Card.Subtitle>
                                        <Card.Subtitle className="mb-3 text-muted">
                                            Type de contrat: {val.typeContrat}
                                        </Card.Subtitle>
                                        {this.state.showMe === key && (
                                            // <-- check if index/key matches
                                            <div className="description">
                                                <Card.Subtitle className="mb-3 text-muted">
                                                    Description :
                                            </Card.Subtitle>
                                                <Card.Text>{val.description}</Card.Text>
                                            </div>
                                        )}
                                        <Card.Link onClick={() => this.operation(key)} id="toto" href="#">Learn more</Card.Link>
                                        <Card.Link href="#"
                                            onClick={() => {
                                                this.toggleModal();
                                                this.setSelectedIdAdv(key);
                                                this.setSelectedIdRedac(key);
                                            }
                                            }>
                                            Apply
                                        </Card.Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        );
                    })}

                </div>
                <Modal show={this.state.isOpen} onHide={this.toggleModal}>
                    <Modal.Body>
                        <Card style={{ width: '100%' }}>
                            <div className="card_body">
                                <Card.Body>
                                    <Form>
                                        <Form.Group controlId="formBasicFirstName">
                                            <Form.Label>Nom et prénom : </Form.Label>
                                            <Form.Control onChange={(e) => { this.setTitle(e.target.value); }} type="text" placeholder="Prénom" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control onChange={(e) => { this.setEmail(e.target.value); }} type="email" placeholder="Email" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicDesc">
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>Description</Form.Label>
                                                <Form.Control onChange={(e) => { this.setMessage(e.target.value); }} as="textarea" rows="3" placeholder="Description" />
                                            </Form.Group>
                                        </Form.Group>


                                        <Button
                                            onClick={() => {
                                                this.submitForm();
                                                this.toggleModal();
                                            }
                                            }
                                            variant="dark" type="submit">
                                            Envoyer
                                     </Button>
                                    </Form>
                                </Card.Body>
                            </div>
                        </Card>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}




