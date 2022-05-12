import React from 'react'
import { Form, Button } from 'react-bootstrap'

const RateCard = () => {
  return (
    <div>
      <Navigation/>
        
       <h1 className='header'>Rating</h1>
        <div className='newForm'>
  <Form.Group className="mb-3">
    <Form.Label>Food rating:</Form.Label>
    <Form.Control placeholder="Input raing out of 10"/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Location rating: </Form.Label>
    <Form.Control placeholder="Input raing out of 10"/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Service rating:</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
 
  
  <Button type="submit">Submit rating</Button>{' '}
  
    </div>
    
    </div>
  )

}

export default RateCard
