
import React, { useState } from "react";
import {JobApplication} from './JobApplication';
import Card from "react-bootstrap/Card";

const JobApplicationList = () => {
   const [jobapps, setJobapps] = useState([
   {
  title: "Développeur MySQL PHP Symfony",
  company: "Sony",
  city: "Paris",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  id: 23123,
},

{
  title: "Développeur MySQL ",
  company: "Corsair",
  city: "Bordeaux",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  id: 231233,
},

{
  title: "Développeur PHP Symfony",
  company: "Logitech",
  city: "Lille",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  id: 2312353,
},

{
  title: "Développeur MERN ",
  company: "Ubisoft",
  city: "Montreal",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  id: 2312350,
},

{
  title: "Développeur AJAX",
  company: "Microsoft",
  city: "Paris",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  id: 2312354,
},
]);
//create query state to hold search value
const [query, setQuery] = useState("");

 return (
     <>
<div className="searchbar">
  {/*  give your query state as value and update it on change*/}
  <Card style={{ width: "100%" }}>
     <Card.Body>
       <Card.Title>Recherche</Card.Title>
        
       <input
       style={{ width: "40%" }}
    type="text"
    placeholder="Entrer un mot clé"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  />
       
        </Card.Body>
        </Card>
</div>

<div className="jobapplicaton">
  
  {/*filter it by title before mapping*/}
  {jobapps
    .filter((jobapp) => jobapp.title.toLowerCase().search(query.toLowerCase()) !== -1)
    .map((jobapp) => (
        console.log({query}),
      <JobApplication
        title={jobapp.title}
        company={jobapp.company}
        city={jobapp.city}
        description={jobapp.description}
        key={jobapp.id}
      />
    ))}
    </div>
    </>
   );
  };

  export default JobApplicationList;