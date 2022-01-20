import React from 'react';
import Card from "react-bootstrap/Card";

export const JobApplication = ({ title, company, city, description }) => {
    return (
     <div className="card_">
   <Card style={{ width: "100%" }}>
     <Card.Body>
       <Card.Title>{title}</Card.Title>
       <Card.Subtitle className="mb-2 text-muted">
         {company} | {city}
       </Card.Subtitle>
       <Card.Text>{description}</Card.Text>
       <Card.Link href="#">Learn more</Card.Link>
       <Card.Link href="#">Apply</Card.Link>
        </Card.Body>
        </Card>
     </div>
    );

    }