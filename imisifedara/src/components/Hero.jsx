import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image1 from "../assets/images/array.jpg";
import Carousel from "react-bootstrap/Carousel";
import { Image } from "react-bootstrap";
import farm from "../assets/images/Farm.jpeg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Hero() {
  return (
    <>
      <Carousel fade data-bs-theme="light" className="carousel-height">
        <Carousel.Item className=" d-flex g-4 justify-content-between  item ">
          <div className="w-50 " style={{ height: `100%` }}>
            <div
              className="fs-1 fw-bold text-uppercase hero"
              style={{ width: `50%` }}
            >
              <strong className="strong">
                Imisifedara Fresh Farm raised Poultry
              </strong>
            </div>
          </div>
          <img
            src={image1}
            alt=""
            className="feed-image"
            style={{ height: "100%", width: "50%" }}
          />
        </Carousel.Item>
        <Carousel.Item className=" d-flex g-4 justify-content-between item">
          <div className="w-50 " style={{ height: `100%` }}>
            <div
              className="fs-1 fw-bold text-uppercase hero"
              style={{ width: `50%` }}
            >
              <strong className="strong">Where Nature meets Nourishment</strong>
            </div>
          </div>
          <img
            src={farm}
            alt=""
            className="feed-image"
            style={{ height: "100%", width: "50%" }}
          />
        </Carousel.Item>
        {/* <Carousel.Item>
          <img src="" alt="" className="feed-image"/>
        </Carousel.Item> */}
      </Carousel>
    </>
  );
}

export const Display = ({ image, heading, detail }) => {
  return (
    <>
      <div className="p-3 dis-div m-3">
        <div className="pic-div">
          <Image src={image} className="ms-3 mt-3 img" rounded></Image>
        </div>
        <div className=" dis-div1 text-center">
          <h2>{heading}</h2>
          <p>{detail}</p>
        </div>
      </div>
    </>
  );
};

export function Footer() {
  return (
    <>
      <Container fluid className="footer-container text-white">
        <Row className="pt-4">
          <Col className=" foot">
            <h5 className="fw-bold"> CONTACT US</h5>
            <p>
              <i className="bi bi-envelope-at-fill"></i>
              <a
                href="#"
                className="text-white text-decoration-none link-opacity-75-hover"
              >
                {" "}
                Email: imisifedarafarms@gmail.com <br />
              </a>
              <i className="bi bi-facebook"></i>{" "}
              <a
                href="#"
                className="text-white text-decoration-none link-opacity-75-hover"
              >
                Facebook: imisifedarafarms.agro{" "}
              </a>
              <br />
              <i className="bi bi-instagram"></i>{" "}
              <a
                href="#"
                className="text-white text-decoration-none link-opacity-75-hover"
              >
                instagram: imisifedarafarms{" "}
              </a>
              <br />
              <i class="bi bi-telephone-inbound"></i>
              <a
                href="#"
                className="text-white text-decoration-none link-opacity-75-hover"
              >
                {" "}
                Telephone: +234-817-394-5130{" "}
              </a>
              <br />{" "}
              <span>
                <i class="bi bi-geo-alt-fill"></i> Address: No 5, Ire-Akari
                close, off Maras road, Agbede, Odugbose, Ikorodu, Lagos
              </span>
            </p>
          </Col>
          <Col className=" foot">
            <h5 className="fw-bold">SHOP NOW</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor.
            </p>
          </Col>
          <Col className=" foot">
            <h5 className="fw-bold">INFORMATION</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipis</p>
          </Col>
          <Col className=""></Col>
        </Row>
        <hr />
        <small> &copy;2024. All rights reserved. Developed by </small>
      </Container>
    </>
  );
}

export const Description = ({ bgPic, btnText }) => {
  return (
    <>
      <div
        className="describe position-relative"
        style={{ backgroundImage: `url(${bgPic})` }}
      >
        <button
          variant="light"
          size="lg"
          className="text-uppercase fw-bolder position-absolute p-3 border border-light tertiary"
          style={{ bottom: `20px`, left: `12%` }}
        >
          {btnText}
        </button>
      </div>
    </>
  );
};

export function Reliance() {
  return (
    <>
      <div>
        <Row className="rel-row m-3">
          <Col className="col tertiary">
            <div>
              <h5>Embrace Self Reliance</h5>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
                modi consectetur ratione quaerat, accusantium temporibus impedit
                ducimus, placeat eaque voluptatibus doloremque nesciunt sint
                animi odit quidem, eum eius provident! Aperiam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                explicabo alias repellendus quasi accusamus veniam.
              </p>
            </div>
          </Col>
          <Col className="col div2"></Col>
        </Row>
      </div>
    </>
  );
}

export const ContactForm = () => {
  return (
    <div className="w-50 m-auto my-3 p-4 tertiary border rounded contact">
      <Form>
        <Form.Group>
          <Form.Control type="text" placeholder="Name" /> <br />
          <Form.Control type="text" placeholder="Subject" /> <br />
          <Form.Label>Message</Form.Label>
          <Form.Control as={"textarea"} rows={9} />
        </Form.Group>{" "}
        <br />
        <Button variant="primary" className=" border border-4" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Hero;
