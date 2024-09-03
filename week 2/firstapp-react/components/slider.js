import Carousel from "react-bootstrap/Carousel";
import {Image} from 'react-bootstrap';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          src="https://www.bandt.com.au/information/uploads/2020/10/GettyImages-1149030626-Large-1260x840.jpg"
          height="300" className="w-100"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
          src="https://www.bandt.com.au/information/uploads/2020/10/GettyImages-1149030626-Large-1260x840.jpg"
          height="300" className="w-100"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
      <Image
          src="https://www.bandt.com.au/information/uploads/2020/10/GettyImages-1149030626-Large-1260x840.jpg"
          height="300" className="w-100"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
