import "../App.css";
import Layout from "../components/Layout";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import VideoTrailer from "../components/VideoPlayer";
import Trailer from "../assets/gymtrailer.mp4";
import Slider1 from "../assets/slide.png";
import {
  FaDumbbell,
  FaClock,
  FaSpa,
  FaUserTie,
  FaHeartbeat,
} from "react-icons/fa";

function HomePage() {
  return (
    <Layout
      children={
        <div className="  font-face-gm  ">
          <Col className="text-center d-flex align-items-center justify-content-center position-relative section-navbar p-0">
            <div
              className="bg-image-container w-100 h-100 position-absolute top-0 start-0"
              style={{
                backgroundImage: `url(${Slider1})`,
              }}
            >
              <div className="bg-overlay w-100 h-100" />
            </div>

            <div
              className="d-flex flex-column align-items-center justify-content-center text-white gap-3 position-relative"
              style={{ zIndex: 2, minHeight: "100vh" }}
            >
              <h1
                className="text-bold text-white landing-text text-uppercase text-center"
                style={{ fontSize: "3.5rem" }}
              >
                The Gym
                <br />
                Where You
                <br />
                Want
                <br />
                To Be
              </h1>

              <Link to="/memberships" className="button-landing btn btn-dark">
                JOIN HERE
              </Link>
            </div>
          </Col>

          <div className="my-5">
            <VideoTrailer
              src={Trailer}
              title="Discover Exceptional Facilities"
              subtitle="A unique training and wellness experience."
            ></VideoTrailer>
          </div>

          <Container>
            <h2 className="display-6 text-center mb-4">Choose your plan</h2>
            <p className="fs-5 text-body-secondary mb-5">
              Find the right membership for your fitness journey. No hidden
              fees, flexible options, and full access to our facilities.
            </p>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                  <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">Basic</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                      $0
                      <small className="text-body-secondary fw-light">
                        {" "}
                        /mo
                      </small>
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>Access to cardio equipment</li>
                      <li>1 group class per week</li>
                      <li>Locker room access</li>
                      <li>Email support</li>
                    </ul>
                    <button
                      type="button"
                      className="w-100 btn btn-lg btn-outline-dark"
                    >
                      Try for free
                    </button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                  <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">Standard</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                      $25
                      <small className="text-body-secondary fw-light">
                        {" "}
                        /mo
                      </small>
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>Full gym access</li>
                      <li>3 group classes per week</li>
                      <li>Nutrition guidance</li>
                      <li>Priority email support</li>
                    </ul>
                    <button type="button" className="w-100 btn btn-lg btn-dark">
                      Join now
                    </button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm border-dark">
                  <div className="card-header py-3 text-bg-dark border-dark">
                    <h4 className="my-0 fw-normal">Elite</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                      $49
                      <small className="text-body-secondary fw-light">
                        {" "}
                        /mo
                      </small>
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>Unlimited gym + classes</li>
                      <li>1-on-1 personal training</li>
                      <li>Body analysis & coaching</li>
                      <li>Phone and email support</li>
                    </ul>
                    <button type="button" className="w-100 btn btn-lg btn-dark">
                      Upgrade to Elite
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
          <Container className="my-5">
            {/* Features Section */}
            <h2 className="text-center mb-4">Why Train With Us?</h2>
            <Row className="text-center mb-5">
              <Col md={4} className="mb-4">
                <FaDumbbell size={40} className="mb-3 text-dark" />
                <h5>Top-tier Equipment</h5>
                <p>
                  Train with premium machines and free weights designed for
                  performance and safety.
                </p>
              </Col>
              <Col md={4} className="mb-4">
                <FaClock size={40} className="mb-3 text-dark" />
                <h5>24/7 Access</h5>
                <p>
                  Work out on your schedule. We’re open day and night for
                  ultimate flexibility.
                </p>
              </Col>
              <Col md={4} className="mb-4">
                <FaSpa size={40} className="mb-3 text-dark" />
                <h5>Recovery Zone</h5>
                <p>
                  Enjoy sauna access, foam rolling stations, and massage tools
                  for post-workout recovery.
                </p>
              </Col>
              <Col md={4} className="mb-4">
                <FaUserTie size={40} className="mb-3 text-dark" />
                <h5>Expert Trainers</h5>
                <p>
                  Our certified coaches will guide your form, programs, and
                  motivation.
                </p>
              </Col>
              <Col md={4} className="mb-4">
                <FaHeartbeat size={40} className="mb-3 text-dark" />
                <h5>Group Classes</h5>
                <p>
                  From HIIT to Yoga – stay motivated and meet others in
                  high-energy group sessions.
                </p>
              </Col>
            </Row>

            {/* FAQ Section */}
            <h2 className="text-center mb-4">Frequently Asked Questions</h2>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Can I cancel my membership anytime?
                </Accordion.Header>
                <Accordion.Body>
                  Yes! We offer flexible, no-contract memberships. Cancel
                  anytime directly from your account or by contacting support.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Is there a free trial available?
                </Accordion.Header>
                <Accordion.Body>
                  Absolutely. You can try our gym free for 7 days — no
                  commitment, no credit card required.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Do you offer personal training?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, we have certified personal trainers ready to work with
                  you 1-on-1. Book sessions at the front desk or online.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  What’s included in group classes?
                </Accordion.Header>
                <Accordion.Body>
                  Classes include HIIT, spin, strength training, yoga, and more
                  — all taught by expert instructors and included in most plans.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Container>
        </div>
      }
    />
  );
}

export default HomePage;
