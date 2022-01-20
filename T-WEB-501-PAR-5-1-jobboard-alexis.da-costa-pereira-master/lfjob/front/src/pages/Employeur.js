import React from 'react';
import Axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'


export default class Employeur extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            idCompanie:"",
            idManager:"",
            title :"",
            city :"",
            salaire:"",
            typeContrat:"",
            description:"",
        };
      };

setIdCompanie= (value) => {
        this.setState({
             idCompanie:value
        });
    };

setIdManager= (value) => {
        this.setState({
             idManager:value
        });
    };

setTitle= (value) => {
        this.setState({
             title:value
        });
    };



setCity= (value) => {
    this.setState({
        city:value
    });
};
    
setSalaire= (value) => {
    this.setState({
        salaire:value
    });
};
setTypeContrat= (value) => {
    this.setState({
        typeContrat:value
    });
};

setDescription= (value) => {
    this.setState({
        description:value
    });
};

submitForm = () =>{
    Axios.post ('http://localhost:3001/create/post', {
        idCompanie: this.state.idCompanie,
        idManager: this.state.idManager,
        title: this.state.title,
        city: this.state.city,
        salaire: this.state.salaire,
        typeContrat: this.state.typeContrat,
        description: this.state.description
        

    });
}


    render() {
       
        return (

            <div className="employeur">
                <p className="addjob">
                    <h2>Ajouter une offre d'emploi</h2>
                </p>
                
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Form>
                        <Form.Group controlId="formBasicidCompagnie">
                                <Form.Label>Identifiant Entrerprise :</Form.Label>
                                <Form.Control onChange={(e) =>{this.setIdCompanie(e.target.value);}} type="number" placeholder="ex:254" />
                            </Form.Group>
                            <Form.Group controlId="formBasicidManager">
                                <Form.Label>Identifiant Manager :</Form.Label>
                                <Form.Control onChange={(e) =>{this.setIdManager(e.target.value);}} type="number" placeholder="ex:23" />
                            </Form.Group>
                            <Form.Group controlId="formBasicTitle">
                                <Form.Label>Titre de l'offre :</Form.Label>
                                <Form.Control  onChange={(e) =>{this.setTitle(e.target.value);}} type="text" placeholder="Titre de l'offre" />
                            </Form.Group>
                            <Form.Group controlId="formBasicVille">
                                <Form.Label>Ville :</Form.Label>
                                <Form.Control onChange={(e) =>{this.setCity(e.target.value);}} type="text" placeholder="Ville"  />
                            </Form.Group>
                            <Form.Group controlId="formBasicSalaire">
                                <Form.Label>Salaire :</Form.Label>
                                <Form.Control onChange={(e) =>{this.setSalaire(e.target.value);}} type="text" placeholder="50000€"  />
                            </Form.Group>
                            <Form.Group controlId="formBasicContrat">
                                <Form.Label>Type de contrat :</Form.Label>
                                <Form.Control onChange={(e) =>{this.setTypeContrat(e.target.value);}} type="text" placeholder="CDD"  />
                            </Form.Group>
                            <Form.Group controlId="formBasicDesc">
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control onChange={(e) =>{this.setDescription(e.target.value);}}as="textarea" rows="4" placeholder="Description" />
                                </Form.Group>
                            </Form.Group>
                                <Button onClick = {this.submitForm} variant="dark" type="submit">
                                    Envoyer
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>

            </div>
        )
    }
}


