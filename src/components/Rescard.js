import React, { useEffect, useState } from 'react'
import {Card, CardGroup,Button, Row, Col} from 'react-bootstrap'
import Footer from './Footer'
import Rating from './Rating'
import Rate from './RateCard.Js'
import { Navigate, useNavigate } from 'react-router-dom'


const Rescard = () => {
  const [restaurentList, setRestaurentList] = useState([]);

  const navigate = useNavigate();

  const ratingPage = () => {
    navigate('/rate');
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
         <CardGroup>
  <Card>
    <Card.Img className='w-50 h-50' variant="top" src="https://bestlistbd.com/wp-content/uploads/classified-listing/2021/04/120710665_864885500916345_7158574977726315330_n.jpg" />
    <Card.Body>
      <Card.Title>Cafe Darbar</Card.Title>
      <Rating/>
      <Card.Text>
      CAFE Darbar Multicuisine Restaurant with variations in Kebab and Drinks.
      </Card.Text>
      <Button type="submit">Rate</Button>{' '}
      <Button type="submit">Details</Button>{' '}
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img className='w-50 h-50' variant="top" src="https://bestlistbd.com/wp-content/uploads/classified-listing/2021/04/120710665_864885500916345_7158574977726315330_n.jpg" />
    <Card.Body>
      <Card.Title>Cafe Rio</Card.Title>
      <Rating/>
      <Card.Text>
      It is one of the best buffet restaurants in Dhaka. We serve delicious food of various flavors. We are committed to providing healthy food and the best service.
      </Card.Text>
      <Button type="submit">Rate</Button>{' '}
      <Button type="submit">Details</Button>{' '}
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img className='w-50 h-50' variant="top" src="https://bbf.digital/wp-content/uploads/2019/03/MADCHEF-21st-Campaign-2019.jpg" />
    <Card.Body>
      <Card.Title>Madchef</Card.Title>
      <Rating/>
      <Card.Text>
      Fastest door2door delivery and delicious food. Order your favorite meal online! Online Grocery shopping. Delivery within minutes. 25+ cuisines. Cash on delivery. 2000+ restaurants. 20,000+ everyday items{' '}
      </Card.Text>
      <Button type="submit">Rate</Button>{' '}
      <Button type="submit">Details</Button>{' '}
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img className='w-50 h-50' variant="top" src="https://media.istockphoto.com/photos/eating-lo-mein-out-of-chinese-take-out-box-picture-id595746054?k=20&m=595746054&s=612x612&w=0&h=1hrOxsKynWesBmCksQQgXVVCbv7JPhAaLOnqTB0W6Qg=" />
    <Card.Body>
      <Card.Title>Takeout</Card.Title>
      <Rating/>
      <Card.Text>
The Takeout is about making your life better through food. We celebrate high and low foods and drinks with equal reverence—with recipes, tips, feature
      </Card.Text>
      <Button type="submit">Rate</Button>{''}
      <Button type="submit">Details</Button>{' '}
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
      <Button onClick={ratingPage} >Rate</Button>{' '}
      <Button >Details</Button>{' '}
          </Card.Body>
       
        </Card>
      </Col>
    );
  })}
  </Row>
   <div>
     <Footer/>
   </div>
    </div>
  )
}

export default Rescard
