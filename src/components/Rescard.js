import React from 'react'
import {Card, CardGroup,Button} from 'react-bootstrap'


const Rescard = () => {
  return (
    <div>
         <CardGroup>
  <Card>
    <Card.Img variant="top" src="https://bestlistbd.com/wp-content/uploads/classified-listing/2021/04/120710665_864885500916345_7158574977726315330_n.jpg" />
    <Card.Body>
      <Card.Title>Cafe Darbar</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <Button type="submit">Rate</Button>{' '}
      <Button type="submit">Details</Button>{' '}
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://bestlistbd.com/wp-content/uploads/classified-listing/2021/04/120710665_864885500916345_7158574977726315330_n.jpg" />
    <Card.Body>
      <Card.Title>Cafe Rio</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <Button type="submit">Rate</Button>{' '}
      <Button type="submit">Details</Button>{' '}
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://bbf.digital/wp-content/uploads/2019/03/MADCHEF-21st-Campaign-2019.jpg" />
    <Card.Body>
      <Card.Title>Madchef</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
      <Button type="submit">Rate</Button>{' '}
      <Button type="submit">Details</Button>{' '}
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://media.istockphoto.com/photos/eating-lo-mein-out-of-chinese-take-out-box-picture-id595746054?k=20&m=595746054&s=612x612&w=0&h=1hrOxsKynWesBmCksQQgXVVCbv7JPhAaLOnqTB0W6Qg=" />
    <Card.Body>
      <Card.Title>Takeout</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
      <Button type="submit">Rate</Button>{' '}
      <Button type="submit">Details</Button>{' '}
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
    </div>
  )
}

export default Rescard
