import { Carousel, Container } from 'react-bootstrap';
import ExampleCarouselImage from './ExampleCarouselImage';

function MyCarousel() {
  return (
    <>
      <Container className='d-flex justify-content-center align-items-center vh-100'>
        <Carousel style={{ maxWidth: '700px' }}>
          <Carousel.Item interval={2500}>
            <ExampleCarouselImage src="../assets/ExampleImage.jpg" text="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <ExampleCarouselImage text="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage text="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
}

export default MyCarousel;
