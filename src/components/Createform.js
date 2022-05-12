import React, { useState } from 'react'
import Navigation from './Navigation'
import { Form, Button } from 'react-bootstrap'
import FileBase64 from 'react-file-base64';




const Createform = () => {
  const [restaurent, setRestaurent] = useState({});
  const [img, setImage] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRestaurent({ ...restaurent, [name]: value });
  };

  const  getFiles=(files)=>{
    setImage(files);
  }

  const saveRestaurentData = async (e) => {
    e.preventDefault();
    
      
    restaurent.image = img;
        fetch(`http://localhost:8000/restaurent`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(restaurent),
        })
          .then((res) => res.json())
          .catch((err)=>{
            console.log(err);
          })
     
    
  };

  
  return (
    <div>
      
        <>
        <h1 className='header'>Create new</h1>
        <div className='newForm'>
        <Form
                noValidate
                
                onSubmit={saveRestaurentData}
                method="POST"
                
              >
  <Form.Group className="mb-3">
    <Form.Label>Name</Form.Label>
    <Form.Control placeholder="Name of the restaurant" name="name"  onChange={(e)=>handleChange(e)}/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Location</Form.Label>
    <Form.Control placeholder="Location of the restaurant" name="location"  onChange={(e)=>handleChange(e)}/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows={3} name="description"  onChange={(e)=>handleChange(e)} />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>image</Form.Label>
    <FileBase64
        multiple={ true }
        onDone={ getFiles } />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Phone</Form.Label>
    <Form.Control placeholder="Phone No." name="phone"  onChange={(e)=>handleChange(e)}/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Select user</Form.Label>
    <Form.Select name="user" onChange={(e)=>handleChange(e)}>
      <option value="admin">Admin</option>
      <option value="owner">Owner</option>
      <option value="user">User</option>
    </Form.Select>
  </Form.Group>
  <Form.Group className="mb-3">
  <Button type="submit">Create</Button>{' '}
  </Form.Group>
  </Form>
  </div>
</>
      
    </div>
  )
}

export default Createform
