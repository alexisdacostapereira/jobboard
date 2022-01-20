import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

class Seconnecter extends React.Component {
    render() {
        return (
            <div className="seconnecter">
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Mot de passe</Form.Label>
                                <Form.Control type="password" placeholder="Mot de passe" />
                            </Form.Group>
                            <Button variant="dark" type="submit">
                                Envoyer
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Seconnecter;

