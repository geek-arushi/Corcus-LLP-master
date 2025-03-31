import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


const services = [
  {
    title: 'Search engine optimization',
    description: 'Learn how to improve your search engine rankings.',
    imgSrc: 'https://placehold.co/100x100',
    bgColor: 'white',
    textColor: 'black',
    titleColor: 'text-success'
  },
  {
    title: 'Pay per click advertising',
    description: 'Maximize your ROI with targeted PPC campaigns.',
    imgSrc: 'https://placehold.co/100x100',
    bgColor: 'black',
    textColor: 'white',
    titleColor: 'text-white'
  },
  {
    title: 'Social media marketing',
    description: 'Engage with your audience on social media platforms.',
    imgSrc: 'https://placehold.co/100x100',
    bgColor: 'black',
    textColor: 'white',
    titleColor: 'text-white'
  },
  {
    title: 'E-mail marketing',
    description: 'Reach your customers directly with email campaigns.',
    imgSrc: 'https://placehold.co/100x100',
    bgColor: 'white',
    textColor: 'black',
    titleColor: 'text-success'
  }
];

const Servicesnew = () => {
  return (
    <Container className="my-4">
      <Row className="mb-4">
        <Col>
          <h1 className="display-4">Services</h1>
          <p>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
        </Col>
      </Row>
      <Row>
        {services.map((service, index) => (
          <Col md={6} className="mb-4" key={index}>
            <Card 
              className={`service-card h-100 ${service.bgColor === 'black' ? 'text-white' : 'text-dark'}`} 
              style={{ backgroundColor: service.bgColor }}
            >
              <Card.Body className="d-flex flex-column justify-content-between">
                <div className="d-flex justify-content-between">
                  <div>
                    <Card.Title className={`h5 ${service.titleColor}`}>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                  </div>
                  <img src={service.imgSrc} alt={service.title} className="ml-4" width="100" height="100" />
                </div>
                <Button variant="link" className={`text-${service.textColor} mt-4 p-0`}>Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Servicesnew;