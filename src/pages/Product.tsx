import { Container, Row, Col, Image } from "react-bootstrap";
import { BsHeartPulseFill, BsFileBarGraph, BsRepeat } from "react-icons/bs";
import Layout from "../components/Layout";
import VideoTrailer from "../components/VideoPlayer";

export default function ProductPage() {
  return (
    <Layout
      children={
        <Container className="font-face">
          <Row className="section-navbar align-items-center justify-content-center">
            <Col sm={12} md={12} lg={5}>
              <div className="d-flex flex-column gap-2">
                <h1 className="font-face-bold">
                  Smart Fitness Tracker: Your Partner for Elite Training
                </h1>

                <h3>Push your limits and reach your fitness goals</h3>

                <button
                  className="button-product"
                  style={{ width: "fit-content" }}
                >
                  Boost Your Performance Now!
                </button>
              </div>
            </Col>

            <Col sm={12} md={12} lg={7}>
              <Image
                className="w-100"
                src="/product/tracker.webp"
                alt="Smart Fitness Band"
              />
            </Col>
          </Row>

          <Row>
            <VideoTrailer
              src="/product/trailer.mp4"
              title="Discover Beat"
              subtitle="Dive into the Smart Tracker experience."
            />
          </Row>

          <hr className="my-5" />

          <Row className="align-items-center gap-5">
            <Col sm={12} md={6}>
              <Image src="/product/tracker2.jpg" fluid />
            </Col>

            <Col>
              <Row>
                <h1 className="font-face-bold">Everything You Need</h1>
              </Row>

              <div className="py-2">
                <div className="d-flex align-items-center my-2 p-3 rounded-2 benefict">
                  <BsHeartPulseFill className="fs-2 me-3 icon-beat" />
                  <div>
                    <h4 className="mb-1">Real-Time Heart Rate Monitoring</h4>
                    <p className="mb-0">
                      Track your heart rate and optimize workout intensity on
                      the fly.
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-center my-2 p-3 rounded-2 benefict">
                  <BsFileBarGraph className="fs-2 me-3 icon-beat" />
                  <div>
                    <h4 className="mb-1">Detailed Performance Metrics</h4>
                    <p className="mb-0">
                      Monitor your workouts and get in-depth insights into your
                      progress and performance.
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-center my-2 p-3 rounded-2 benefict">
                  <BsRepeat className="fs-2 me-3 icon-beat" />
                  <div>
                    <h4 className="mb-1">Mobile App Integration</h4>
                    <p className="mb-0">
                      Sync your stats with popular mobile apps for full progress
                      tracking and management.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>


      
          <h2 className="font-face-bold text-center my-5">Available Options</h2>
            
          <Row className="align-items-center">
            <Col sm={12} md={6} className="mb-4">
              <h3>Chest Strap</h3>
              <p className="lead">
                The chest strap provides an accurate and comfortable way to
                measure your heart rate during workouts. With its adjustable fit
                and high-quality materials, it conforms perfectly to your body
                for reliable readings at all times.
              </p>
            </Col>
            <Col sm={12} md={6} className="mb-4 d-flex align-items-center">
              <div className="w-100">
                <Image src="/product/tracker3.jpg" alt="Chest Strap" fluid />
              </div>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col sm={12} md={6} className="mb-4">
              <h3>Wrist Watch</h3>
              <p className="lead">
                Our wrist watch blends the features of a fitness tracker with a
                sleek sports watch design. With an intuitive display, track your
                heart rate, elapsed time, and other essential workout metrics.
                Stylish and functional — perfect for your active lifestyle.
              </p>
            </Col>
            <Col sm={12} md={6} className="mb-4 d-flex align-items-center">
              <div className="w-100">
                <Image src="/product/tracker4.jpg" alt="Wrist Watch" fluid />
              </div>
            </Col>
          </Row>

          <hr className="my-5" />

          <Row className="mt-5">
            <Col sm={12} md={6} className="mb-4">
              <h2>Warranty</h2>
              <p>
                We offer a satisfaction guarantee on our smart fitness tracker.
                If you're not completely happy with your purchase, return it
                within 30 days for a full refund.
              </p>
            </Col>
            <Col sm={12} md={6} className="mb-4">
              <h2>Customer Support</h2>
              <p>
                Have questions or need help? Our customer support team is ready
                to assist you. Reach out via email or phone for personalized
                support.
              </p>
            </Col>
          </Row>
        </Container>
      }
    ></Layout>
  );
}
