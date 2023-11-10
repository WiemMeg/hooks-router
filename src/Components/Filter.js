import React from 'react';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";



const Filter = ({search}) => {
return (
    
<InputGroup className="mb-3">
      
<Form.Control
placeholder="filter"
aria-label="filter"
aria-describedby="basic-addon1"
onChange={(e) => search(e.target.value)}/>
        
      </InputGroup>
    )};
       
export default Filter;