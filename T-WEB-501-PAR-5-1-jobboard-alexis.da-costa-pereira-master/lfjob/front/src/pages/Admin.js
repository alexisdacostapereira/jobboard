import React from 'react';
import Card from "react-bootstrap/Card";
import Axios from 'axios';
import Popup from 'reactjs-popup';
import {Button, Col, Form, Modal} from "react-bootstrap";

const localUrl = 'http://localhost:3001'

export default class Admin extends React.Component {
    constructor() {
        super()
        this.state = {

            advList: [],
            userList: [],
            companyList:[],
            postMessageList:[],
            idCompanie:"",
            idManager:"",
            title :"",
            city :"",
            salaire:"",
            typeContrat:"",
            description:"",
            firstName :"",
            lastName :"",
            email:"",
            password:"",
            country:"",
            zip:"",
            address:"",
            secondAdress:"",
            userType:"",
            compName:"",
            compWebsite:"",
            compPhone:"",
            compIndustry:"",
        }
    }
//Nouvelle annonce
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
    submitFormListing = () =>{
        Axios.post (localUrl + '/create/post', {
            idCompanie: this.state.idCompanie,
            idManager: this.state.idManager,
            title: this.state.title,
            city: this.state.city,
            salaire: this.state.salaire,
            typeContrat: this.state.typeContrat,
            description: this.state.description


        });
    }

///Nouvel utilisateur
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
    setZip= (value) => {
        this.setState({
            zip:value
        });
    };
    setAdress= (value) => {
        this.setState({
            address:value
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
    submitFormUser = () =>{
        Axios.post (localUrl+'/create/user', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            /*country: this.state.country,*/
            city: this.state.city,
            address: this.state.address,
            secondAdress: this.state.secondAdress,
            zip: this.state.zip,
            userType: this.state.userType,

        });
    };
    updateFormUser = (value) =>{
         Axios.put (localUrl+'/update/user/'+this.state.userList[value].id_people, {
            id_people: this.state.id_people,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            city: this.state.city,
            address: this.state.address,
            secondAdress: this.state.secondAdress,
            zip: this.state.zip,
            userType: this.state.userType,

        });
    };

//Nouvelle entreprise
    setCompName= (value) => {
        this.setState({
            compName:value
        });
    };
    setCompWebsite= (value) => {
        this.setState({
            compWebsite:value
        });
    };
    setCompPhone= (value) => {
        this.setState({
            compPhone:value
        });
    };
    setCompIndustry= (value) => {
        this.setState({
            compIndustry:value
        });
    };
    submitFormComp = () =>{
        Axios.post (localUrl+'/create/company', {
            compName: this.state.compName,
            compWebsite: this.state.compWebsite,
            compPhone: this.state.compPhone,
            email: this.state.email,
            city: this.state.city,
            adress: this.state.address,
            compIndustry: this.state.compIndustry,
        });
    };

//del advertisement
    delForm = (value) => {
        Axios.delete(localUrl+'/delete/post/'+this.state.advList[value].id_advertisement)
    }
    delUser = (value) => {
        Axios.delete(localUrl+'/delete/user/'+this.state.userList[value].id_people)
    }
    delComp = (value) => {
        Axios.delete(localUrl+'/delete/comp/'+this.state.companyList[value].id_companie)
    }
    delMsg = (value) => {
        Axios.delete(localUrl+'/delete/msg/'+this.state.postMessageList[value].id_postMessage)
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggleModalU = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggleModalC = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    componentDidMount() {
        Axios.get(localUrl + `/get/adv`)
            .then(res => {
                const advList = res.data;

                this.setState({ advList });
                console.log(advList)
            })
        Axios.get(localUrl + `/get/postMessage`)
            .then(res => {
                const postMessageList = res.data;

                this.setState({ postMessageList });
                console.log(postMessageList)
            })
        Axios.get(localUrl + `/get/user`)
            .then(res => {
                const userList = res.data;

                this.setState({ userList });
                console.log(userList)
            })
        Axios.get(localUrl + `/get/compagnie`)
            .then(res => {
                const companyList = res.data;

                this.setState({ companyList });
                console.log(companyList)
            })
        //Axios.post(localUrl+`/post/company`)
          //cd  .then()
    }

   

    operation(index) {
        this.setState({
            showMe: this.state.showMe === index ? null : index,
        })
    }
    render() {


        return (

            <div className="main-page">
                <h1>Annonces</h1>
                <p>
                    <Popup trigger={<Card.Link href="#addPost">Ajouter une annonce</Card.Link>} position="right center" modal nested>
                        <div className="pop">
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
                                        <Button onClick = {this.submitFormListing} variant="dark" type="submit">
                                            Envoyer
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </div>
                    </Popup>
                </p>

                <div className="adv_list">
                    {this.state.advList.map((val, key) => {
                        return (
                            <p><div >
                                <Card style={{ width: "100%", }}>
                                    <Card.Body className="card_admin_test">
                                        <Card.Subtitle><p>Annonce N°{val.id_advertisement} par {val.compName} Gérée par: {val.firstName} {val.lastName}</p> <p>Titre: {val.title} | Ville: {val.city} | Salaire: {val.salaire}€ | Contrat: {val.typeContrat} </p> <p>Disponibilité: {val.isAvailable}</p></Card.Subtitle>
                                        {this.state.showMe === key && (
                                            
                                            <div className="description">
                                                <Card.Subtitle className="mb-3 text-muted">
                                                    Description :
                                            </Card.Subtitle>
                                                <Card.Text>{val.description}</Card.Text>
                                            </div>
                                        )}
                                        <Card.Link onClick={() => this.operation(key)} id="toto" href="#listing">Show Description</Card.Link>
                                        <Card.Link id="toto" href="#modAd">Modifier</Card.Link>
                                        <Card.Link id="toto" href="#delAd" onClick={() => {
                                            this.delForm(key)
                                        }
                                        }>Supprimer</Card.Link>


                                    </Card.Body>


                                </Card>
                            </div></p>
                        );
                    })}

                </div>

                <h1>Utilisateurs</h1>
                <p>
                    <Popup trigger={<Card.Link href="#addUser">Ajouter un utilisateur </Card.Link>} position="right center" modal nested>
                        <div className="pop">
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
                                            <Form.Label>Addresse</Form.Label>
                                            <Form.Control
                                                type ="text"
                                                onChange={(e) =>{this.setSecondAdress(e.target.value);}}
                                                placeholder="Appartement, studio, ou etage" />
                                        </Form.Group>
                                        <Form.Group controlId="formGridUserType">
                                            <Form.Label>Type d'utilisateur :</Form.Label>
                                            <Form.Control onChange={(e) =>{this.setUserType(e.target.value);}} type="number" placeholder="'1' pour un manager, sinon '0'  " />
                                        </Form.Group>

                                        <Button onClick = {this.submitFormUser} variant="dark" type="submit">
                                            Envoyer
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </div>
                    </Popup>
                </p>
                <div className="user_list">
                    {this.state.userList.map((val, key) => {
                        return (
                            <div ><p>
                                <Card style={{ width: "100%", }}>
                                    <Card.Body className="card_admin_test">
                                        <Card.Subtitle>
                                            <p>
                                                |ID Utilisateur: {val.id_people} | Nom: {val.lastName} Prénom: {val.firstName} | E-mail: {val.people_email} | Addresse: {val.people_address} {val.people_secondAdress} {val.zip} {val.people_city}
                                            </p>
                                        </Card.Subtitle>
                                        <Popup trigger={<Card.Link href="#modUser">Modifier</Card.Link>} position="right center" modal nested>
                                            <div className="pop">
                                                <Card style={{ width: '100%' }}>
                                                    <Card.Body>
                                                        <Form>
                                                            <Form.Row>
                                                                <Form.Group as={Col} controlId="formGridFirstNames">
                                                                    <Form.Label>Prénom</Form.Label>
                                                                    <Form.Control
                                                                        type="firstname"
                                                                        placeholder={val.firstName}
                                                                        onChange={(e) =>{
                                                                            if(e.target.value == null){
                                                                                this.setFirstName('{val.firstName}');
                                                                            }else
                                                                                (this.setFirstName(e.target.value))}}
                                                                    />
                                                                </Form.Group>
                                                                <Form.Group as={Col} controlId="formGridNames">
                                                                    <Form.Label>Nom</Form.Label>
                                                                    <Form.Control
                                                                        type="name"
                                                                        value={val.lastName}
                                                                        onChange={(e) =>{this.setLastName(e.target.value);}}
                                                                        required/>
                                                                </Form.Group>
                                                            </Form.Row>

                                                            <Form.Row>
                                                                <Form.Group as={Col} controlId="formGridEmail">
                                                                    <Form.Label>Email</Form.Label>
                                                                    <Form.Control
                                                                        type="email"
                                                                        value={val.people_email}
                                                                        onChange={(e) =>{this.setEmail(e.target.value);}}
                                                                        required/>
                                                                </Form.Group>

                                                                <Form.Group as={Col} controlId="formGridPassword">
                                                                    <Form.Label>Mot de passe</Form.Label>
                                                                    <Form.Control
                                                                        type="password"
                                                                        value={val.password}
                                                                        onChange={(e) =>{this.setPassword(e.target.value);}}
                                                                        required/>
                                                                </Form.Group>
                                                            </Form.Row>

                                                            <Form.Row>
                                                                <Form.Group as={Col} controlId="formGridCity">
                                                                    <Form.Label>Ville</Form.Label>
                                                                    <Form.Control
                                                                        type="text"
                                                                        value={val.people_city}
                                                                        onChange={(e) =>{this.setCity(e.target.value);}}
                                                                        required
                                                                    />
                                                                </Form.Group>
                                                                <Form.Group as={Col} controlId="formGridZip">
                                                                    <Form.Label>Code postal</Form.Label>
                                                                    <Form.Control
                                                                        type="text"
                                                                        value={val.zip}
                                                                        onChange={(e) =>{this.setZip(e.target.value);}}
                                                                        />
                                                                </Form.Group>
                                                            </Form.Row>
                                                            <Form.Group controlId="formGridAddress1">
                                                                <Form.Label>Addresse</Form.Label>
                                                                <Form.Control
                                                                    type ="text"
                                                                    value={val.people_address}
                                                                    onChange={(e) =>{this.setAdress(e.target.value);}}
                                                                    required/>
                                                            </Form.Group>

                                                            <Form.Group controlId="formGridAddress2">
                                                                <Form.Label>Addresse</Form.Label>
                                                                <Form.Control
                                                                    type ="text"
                                                                    value={val.people_secondAdress}
                                                                    onChange={(e) =>{this.setSecondAdress(e.target.value);}}
                                                                    />
                                                            </Form.Group>
                                                            <Form.Group controlId="formGridUserType">
                                                                <Form.Label>Type d'utilisateur :</Form.Label>
                                                                <Form.Control
                                                                    type="number"
                                                                    value={val.userType}
                                                                    onChange={(e) =>{this.setUserType(e.target.value);}} />
                                                            </Form.Group>

                                                            <Button onClick = {this.updateFormUser(key)} variant="dark" type="submit">
                                                                Envoyer
                                                            </Button>
                                                        </Form>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        </Popup>
                                        <Card.Link id="toto" href="#delUser" onClick={() => {
                                            this.delUser(key)
                                        }}>
                                            Supprimer
                                        </Card.Link>
                                    </Card.Body>


                                </Card></p>
                            </div>
                        );
                    })}
                </div >

                <h1>Companies</h1>
                <p>
                    <Popup trigger={<Card.Link href="#addComp">Ajouter une entreprise</Card.Link>} position="right center" modal nested>
                        <div className="pop">
                            <Card style={{ width: '100%' }}>
                                <Card.Body>
                                    <Form>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridCompName">
                                                <Form.Label>Nom  de l'entreprise: </Form.Label>
                                                <Form.Control
                                                    type="compName>"
                                                    placeholder="Nom  de l'entreprise"
                                                    onChange={(e) =>{this.setCompName(e.target.value);}}
                                                    required
                                                />
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formGridCompWebsite">
                                                <Form.Label>Site web</Form.Label>
                                                <Form.Control
                                                    type="compWebsite"
                                                    placeholder="www.exemple.com" onChange={(e) =>{this.setCompWebsite(e.target.value);}}
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

                                            <Form.Group as={Col} controlId="formGridPhone">
                                                <Form.Label>Téléphone: </Form.Label>
                                                <Form.Control
                                                    type="phone"
                                                    placeholder="0123456789"
                                                    onChange={(e) =>{this.setCompPhone(e.target.value);}}/>
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridCity">
                                                <Form.Label>Ville</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Ville"
                                                    onChange={(e) =>{this.setCity(e.target.value);}}
                                                    required
                                                />
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

                                        <Form.Group controlId="formGridIndustry">
                                            <Form.Label>Secteur d'activité :</Form.Label>
                                            <Form.Control onChange={(e) =>{this.setCompIndustry(e.target.value);}} type="text" placeholder="ex: Tech, Immobilier, Restauration, etc..." />
                                        </Form.Group>

                                        <Button onClick = {this.submitFormComp} variant="dark" type="submit">
                                            Envoyer
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </div>
                    </Popup>
                </p>
                <div className="companies_list">
                    <div className="compagnie_list">
                        {this.state.companyList.map((val, key) => {
                            return (
                                <div ><p>
                                    <Card style={{ width: "100%", }}>
                                        <Card.Body className="card_admin_test">
                                            <Card.Subtitle>
                                                <p>
                                                    |ID Entreprise: {val.id_companie} | Nom: {val.compName} | Site web: {val.compWebsite} | E-mail: {val.compEmail} | Addresse: {val.compAdress} {val.compCity} | Industrie: {val.compIndustry}
                                                </p>
                                            </Card.Subtitle>
                                            <Card.Link id="toto" href="#modComp">Modifier</Card.Link>
                                            <Card.Link id="toto" href="#delComp" onClick={() => {
                                                this.delComp(key)
                                            }}>
                                                Supprimer
                                            </Card.Link>
                                        </Card.Body>


                                    </Card></p>
                                </div>
                            );
                        })}
                    </div>
                </div >

                <h1>Messages</h1>
                <div className="postMessage_list">
                    <div className="postMessage_list">
                        {this.state.postMessageList.map((val, key) => {
                            return (
                                <div ><p>
                                    <Card style={{ width: "100%", }}>
                                        <Card.Body className="card_admin_test">
                                            <Card.Subtitle>
                                                <p>
                                                    Message N° {val.id_postMessage} pour l'annonce N° {val.id_advertisement} entre l'utilisateur N° {val.id_applicant} et le manager N° {val.id_manager}
                                                </p>
                                            </Card.Subtitle>
                                            {this.state.showMe === key && (

                                                <div className="message">
                                                    <Card.Subtitle className="mb-3 text-muted">
                                                        Message :
                                                    </Card.Subtitle>
                                                    <Card.Text>
                                                        {val.message}
                                                        <p/><p/>
                                                        <p><b>Envoyé le {val.sentTime}</b></p>
                                                    </Card.Text>
                                                </div>
                                            )}
                                            <Card.Link onClick={() => this.operation(key)} id="toto" href="#msg">Afficher le message</Card.Link>
                                            <Card.Link id="toto" href="#delMsg" onClick={() => {
                                                this.delMsg(key)
                                            }}>
                                                Supprimer
                                            </Card.Link>
                                        </Card.Body>
                                    </Card></p>
                                </div>
                            );
                        })}
                    </div>
                </div >
            </div>
        )
    }
}