import React, { useEffect } from "react";
import Axios from 'axios';
import { Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'




class Creationcompte extends React.Component{

constructor(props) {
    super(props);
    this.state = {
        firstName :"",
        lastName :"",
        email:"",
        password:"",
        country:"",
        city:"",
        zip:"",
        adress:"",
        secondAdress:"",
        userType:""
        
    };
  }

  handleChange = e => {
    let userType = e.target.value == 'professionnel' ? 1 : 0;
      this.setState({
          userType: userType
        });
     };
        
  setFirstName= (value) => {
    this.setState({
        firstName:value
        });
  };
  setLastName= (value) => {
    this.setState({
        lastName:value
        });
  };
  setEmail= (value) => {
    this.setState({
        email:value
        });
  };
  setPassword= (value) => {
    this.setState({
        password:value
        });
  };
  setCountry= (value) => {
    this.setState({
        country:value
        });
  };
  setCity= (value) => {
    this.setState({
        city:value
        });
  };
  setZip= (value) => {
    this.setState({
        zip:value
        });
  };
  setAdress= (value) => {
    this.setState({
        adress:value
        });
  };
  setSecondAdress= (value) => {
    this.setState({
        secondAdress:value
        });
  };
  setUserType= (value) => {
    this.setState({
        userType:value
        });
  };

  submitForm = () =>{
    Axios.post ('http://localhost:3001/create/userNotManager', {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        /*country: this.state.country,*/
        city: this.state.city,
        adress: this.state.adress,
        secondAdress: this.state.secondAdress,
        zip: this.state.zip,
        userType: this.state.userType,

    });
};

render(){
    return (
        <div className="creation_compte">
            <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Form>
                    <Form.Row>
                            <Form.Group as={Col} controlId="formGridFirstNames">
                                <Form.Label>Prénom</Form.Label>
                                <Form.Control
                                 type="firstname" 
                                 placeholder="Prénom" 
                                 onChange={(e) =>{this.setFirstName(e.target.value);}}
                                 required
                                 />
                                </Form.Group> 
                            <Form.Group as={Col} controlId="formGridNames">
                                <Form.Label>Nom</Form.Label>
                                <Form.Control
                                 type="name" 
                                 placeholder="Nom" onChange={(e) =>{this.setLastName(e.target.value);}}
                                required/>
                            </Form.Group>
                    </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                 type="email" 
                                 placeholder="example@example.com" 
                                 onChange={(e) =>{this.setEmail(e.target.value);}}
                                required/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Mot de passe</Form.Label>
                                <Form.Control
                                 type="password"
                                  placeholder="Mot de passe"
                                  onChange={(e) =>{this.setPassword(e.target.value);}}
                                 required/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>

                       {/* <Form.Group as={Col} controlId="formGridCountry">
                                <Form.Label>Pays</Form.Label>
                                <Form.Control 
                                type="text"
                                placeholder="Pays"
                                onChange={(e) =>{this.setCountry(e.target.value);}}
                                required
                                />
                            </Form.Group>  */} 
                            
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Ville</Form.Label>
                                <Form.Control
                                type="text"
                                placeholder="Ville"
                                onChange={(e) =>{this.setCity(e.target.value);}}
                                required
                                />
                            </Form.Group>

                            

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Code postal</Form.Label>
                                <Form.Control
                                type="text"
                                onChange={(e) =>{this.setZip(e.target.value);}}
                                placeholder="75000"/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Addresse</Form.Label>
                            <Form.Control 
                            type ="text"
                            placeholder="1 Rue Victor Hugo"
                            onChange={(e) =>{this.setAdress(e.target.value);}} 
                            required/>
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Adresse</Form.Label>
                            <Form.Control
                            type ="text"
                            placeholder="1 Rue Victor Hugo"
                            onChange={(e) =>{this.setSecondAdress(e.target.value);}}
                            placeholder="Appartement, studio, ou etage" />
                        </Form.Group>

                        <Button onClick = {this.submitForm} variant="dark" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>

        </div>
    )
}
       
    
}

export default Creationcompte;