import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function NavBar({ Add }) {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [reating, setreating] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("hiidsdsi");
    Add(title, desc, reating);
  }

  return (
<>
<form onSubmit={(e) => handleSubmit(e)}>
<Navbar bg="dark" data-bs-theme="dark">
<Container>
<Navbar.Brand href="#home">ADD data</Navbar.Brand>
<InputGroup className="mb-3">
<Form.Control
 placeholder="Title"
 aria-label="Username"
aria-describedby="basic-addon1"
onChange={(e) => settitle(e.target.value)}/>
</InputGroup>
<InputGroup className="mb-3">
<Form.Control
placeholder="Description"
aria-label="Description"
aria-describedby="basic-addon1"
onChange={(e) => setdesc(e.target.value)}/>
</InputGroup>
<InputGroup className="mb-3">
<Form.Control
placeholder="Rating"
aria-label="Ritin"
aria-describedby="basic-addon1"
onChange={(e) => setreating(e.target.value)}/>
<button>Submit</button>
</InputGroup>
</Container>
</Navbar>
</form>
</>
  );
}

export default NavBar;
