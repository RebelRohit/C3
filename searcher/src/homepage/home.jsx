import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import img from '../Assets/imag1.jpg';
import img1 from '../Assets/imag2.jpg';
import './home.scss';

function Home() {
  return (
    <div className="App">
      <h1 className='head'>Welcome to Ozonetel</h1>
      <main>
        <Carousel fade>
          <Carousel.Item interval={2500}>
            <div className="d-flex justify-content-center align-items-center custom-carousel-item">
              <img
                src={img}
                alt="Second slide"
                className="img-fluid"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <div className="d-flex justify-content-center align-items-center custom-carousel-item">
              <img
                src={img1}
                alt="First slide"
                className="img-fluid"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </main>

      <footer >
        <Container>
          <Row>
            <Col>
              <p id="foot">&copy; 2023 Ozonetel</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Home;
