import React from 'react'
import Navigation from './Navigation'
import { Form, Button } from 'react-bootstrap'

const Createform = () => {
  return (
    <div>
        <Navigation/>
        <>
        <h1 className='header'>Create new</h1>
        <div className='newForm'>
  <Form.Group className="mb-3">
    <Form.Label>Name</Form.Label>
    <Form.Control placeholder="Name of the restaurant"/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Location</Form.Label>
    <Form.Control placeholder="Location of the restaurant"/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Phone</Form.Label>
    <Form.Control placeholder="Phone No."/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Select user</Form.Label>
    <Form.Select>
      <option>Admin</option>
      <option>Owner</option>
      <option>User</option>
    </Form.Select>
  </Form.Group>
  <Form.Group className="mb-3">
  <Button type="submit">Create</Button>{' '}
  </Form.Group>
  </div>
</>
      
    </div>
  )
}

export default Createform
