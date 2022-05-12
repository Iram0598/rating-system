import React ,{useState, useEffect} from 'react'
import Navigation from './Navigation'

import {Card, CardGroup, Button, Row, Col} from 'react-bootstrap'


const Newlyadded = () => {

  const [restaurentList, setRestaurentList] = useState([]);

  const onChange = (e)=>
  {
    e.preventDefault();
    fetch(`http://localhost:8000/restaurent/5`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((res)=>{
            setRestaurentList(res);
            console.log(res);
          })
          .catch((err)=>{
            console.log(err);
            
          })
  }
  

  useEffect(()=>{
    fetch(`http://localhost:8000/restaurent`, {
          method: "GET",
         
        })
          .then((res) => res.json())
          .then((res)=>{
            setRestaurentList(res);
            console.log(res);
          })
          .catch((err)=>{
            console.log(err);
            
          })
  },[])
  return (
    <div>
      
      <>
       <h1>Newly added</h1>
       <div>
       <CardGroup>
  <Card>
    <Card.Img variant="top" src="https://media-cdn.tripadvisor.com/media/photo-s/1b/dc/a7/d9/the-cafe-rio-ltd.jpg" />
    <Card.Body>
      <Card.Title>Cafe rio</Card.Title>
      <Card.Text>
        It is one of the best buffet restaurants in Dhaka. We serve delicious food of various flavors. We are committed to providing healthy food and the best service.
      </Card.Text>
      <Button type="submit">Edit</Button>{' '}
      <Button type="submit">Delete</Button>{' '}
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.mawbiz.com.bd/application/views/module/product_image/IMG_4414_1.JPG" />
    <Card.Body>
      <Card.Title>Cafe Darbar</Card.Title>
      <Card.Text>
      CAFE Darbar Multicuisine Restaurant with variations in Kebab and Drinks.{' '}
      </Card.Text>
      <Button type="submit">Edit</Button>{' '}
      <Button type="submit">Delete</Button>{' '}
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://reviewbangla.com/media/CACHE/images/images/business_gallery_images/CAFE_Darbar2/1537175a55afcfc1b0d1cbee345ce683.jpg" />
    <Card.Body>
      <Card.Title>Madchef</Card.Title>
      <Card.Text>
      It is one of the best buffet restaurants in Dhaka. We serve delicious food of various flavors. We are committed to providing healthy food and the best service.
      </Card.Text>
      <Button type="submit">Edit</Button>{' '}
      <Button type="submit">Delete</Button>{' '}
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
        Takeout is one of the best restaurant in Dhaka that serves burgers, pasta, noodles.
      </Card.Text>
      <Button type="submit">Edit</Button>{' '}
      <Button type="submit">Delete</Button>{' '}
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://media-cdn.tripadvisor.com/media/photo-s/15/78/ec/6e/img-20181122-wa0019-largejpg.jpg" />
    <Card.Body>
      <Card.Title>Cafe crunch</Card.Title>
      <Card.Text>
        Best shwarma and Burger in town with less price and more chese. 
      </Card.Text>
      <Button type="submit">Edit</Button>{' '}
      <Button type="submit">Delete</Button>{' '}
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
<Row>
  {restaurentList.map((item, i)=>{
    return(
      <Col md="3" key={i}>
        <Card>
          <Card.Body>
            <Card.Img src={item.image[0].base64}/>
              
          
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            {item.description}
      </Card.Text>
      <Button type="submit">Edit</Button>{' '}
      <Button type="submit" onClick={onChange}>Delete</Button>
          </Card.Body>
       
        </Card>
      </Col>
    );
  })}
  </Row>
       </div>

      </>
    </div>
  )
}

export default Newlyadded
