import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image1 from "../assets/images/pighome.jpg";
import Carousel from "react-bootstrap/Carousel";
import { Image } from "react-bootstrap";
import farm from "../assets/images/Farm.jpeg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Alert } from "react-bootstrap";

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
      <div className="p-1 dis-div m-2 shadow border rounded-2">
        <div className="pic-div">
          <Image src={image} className="mx-auto  img" rounded></Image>
        </div>
        <div className=" dis-div1 text-center ">
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
            <h5 className="fw-bold"> FOR ENQUIRIES</h5>
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
              <i className="bi bi-telephone-inbound"></i>
              <a
                href="#"
                className="text-white text-decoration-none link-opacity-75-hover"
              >
                {" "}
                Telephone: +234-817-394-5130{" "}
              </a>
              <br />{" "}
              <span>
                <i className="bi bi-geo-alt-fill"></i> Address: No 5, Ire-Akari
                close, off Maras road, Agbede, Odugbose, Ikorodu, Lagos
              </span>
            </p>
          </Col>
          <Col className=" foot">
            <h5 className="fw-bold">SHOP NOW</h5>
            <p>Discover our premium poultry and livestock products!</p>
          </Col>
          <Col className=" foot">
            <h5 className="fw-bold">Privacy Policy </h5>
            <p>
              Your privacy is important to us. We collect personal and
              non-personal information to enhance your experience. For details,
              read our full Privacy Policy and Terms of Service.
            </p>
          </Col>
          <Col className=""></Col>
        </Row>
        <hr />
        <small> &copy;2024. All rights reserved. Developed by Osarogie Igbinosa and </small>
      </Container>
    </>
  );
}

export const Description = ({ bgPic, btnText }) => {
  return (
    <>
      <div>
        <div
          className="describe position-relative "
          style={{ backgroundImage: `url(${bgPic})` }}
        >
          <button
            variant="light"
            size="lg"
            className="text-uppercase fw-bolder position-absolute p-3 border border-light tertiary"
            style={{ bottom: `20px`, left: `25%` }}
          >
            {btnText}
          </button>
        </div>
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
                Self-reliance in poultry and farming ensures food security,
                financial independence, and sustainability. By taking control of
                food production and income generation, farmers reduce dependence
                on external sources and build stable livelihoods.
              </p>
              <p>
                Starting small, applying best practices in disease management
                and feeding, and using locally available resources enhance
                productivity. Diversifying into egg production, fish farming, or
                vegetable gardening maximizes profits. Proper farm management,
                hygiene, and record-keeping further ensure success.
              </p>
              <p>
                Embracing self-reliance in farming empowers individuals to
                create sustainable businesses, contribute to food security, and
                achieve economic stability.
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
  const [inputs, setInputs] = useState({});
  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState(`none`);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((val) => ({ ...val, [name]: value }));
    setDisplay(`none`);
  }

  const sendMail = async () => {
    const url = "http://127.0.0.1:8000/api/imisifedara/send/mail";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify JSON content type
        },
        body: JSON.stringify({
          name: inputs.name,
          email: inputs.email,
          subject: inputs.subject,
          message: inputs.message,
        }),
      });

      // Check if the response is okay
      if (response.ok) {
        const data = await response.json();
        console.log("Email sent successfully:", data.message);
        // Add UI feedback or further actions here
        /**   setShow(false);
        setDisplay(`block`);*/
      } else {
        // Parse and log error details from the server response
        const errorData = await response.json();
        console.error("Failed to send email:", errorData.message);
        alert(`Error: ${errorData.message}`); // User-friendly feedback
      }
    } catch (error) {
      // Handle network or other unexpected errors
      console.error("An unexpected error occurred:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Optional: Basic validation before sending
    if (!inputs.name || !inputs.email || !inputs.subject || !inputs.message) {
      alert("All fields are required.");
      setShow(true);
      setDisplay(`block`);
      return;
    }

    try {
      // Optionally, set a loading state here (if applicable)
      await sendMail(); // Wait for the email to be sent
      alert("Email sent successfully!"); // Provide feedback to the user
      setShow(false);
      setDisplay(`block`);
      // Optionally, clear the form inputs here
    } catch (error) {
      console.error("Error in handleSubmit:", error);
      alert("An error occurred while sending the email. Please try again.");
    }
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   sendMail();
  //   // const formatString = ` Name: ${inputs.name}, \n Email: ${inputs.email}, \n Subject: ${inputs.subject}, \n Message: ${inputs.message}`;
  //   //  const formatArray = [`Name:${inputs.name}`, `Email:${inputs.email}`, `Subject: ${inputs.subject}`, `Message: ${inputs.message}` ]
  //   //   alert(formatArray.join('\n'));
  //   // const changeToJson = JSON.stringify(inputs, null, 5);
  //   //     if (!inputs.name || !inputs.email || !inputs.subject || !inputs.message){
  //   //     setShow(true);
  //   //  }
  //   //  return changeToJson

  //   //alert(changeToJson); // You can remove this alert when you finish with the back-end
  // };

  return (
    <div className="w-50 m-auto my-3 p-4 tertiary border rounded contact">
      <div className="" style={{ display: `${display}` }}>
        {show ? (
          <Alert variant="danger">
            <i className="bi bi-exclamation-triangle"></i> The form is not
            properly filled
          </Alert>
        ) : (
          <Alert variant="success">
            <i className="bi bi-check2"></i> Success! Your Message has been Sent
          </Alert>
        )}
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            value={inputs.name}
            onChange={handleChange}
            type="text"
            placeholder="Name"
            name="name"
          />{" "}
          <br />
          <Form.Control
            value={inputs.email}
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Input your Email here"
          />{" "}
          <br />
          <Form.Control
            value={inputs.subject}
            onChange={handleChange}
            type="text"
            name="subject"
            placeholder="Subject"
          />{" "}
          <br />
          <Form.Label>Message</Form.Label>
          <Form.Control
            value={inputs.message}
            name="message"
            onChange={handleChange}
            as={"textarea"}
            rows={9}
          />
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
