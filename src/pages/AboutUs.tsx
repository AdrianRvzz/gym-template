import { Image, Container, Card, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";

function AboutUsPage() {
  return (
    <Layout>
      <Container>
        <Row className="align-items-center section-navbar  ">
          <Col sm={12} md={6} className="mb-4">
            <h1>About Us</h1>
            <p className="lead">
              We are a company dedicated to promoting happiness, well-being, and health within the fitness community. 
              We offer a unique experience supported by our outstanding facilities and services. 
              Our mission is to empower you to lead an energetic life, improving your physical fitness along the way.
            </p>
          </Col>
          <Col sm={12} md={6} className="mb-4 d-flex align-items-center">
            <div className="w-100">
              <Image
                className="d-flex justify-content-center align-items-center"
                src="/gallery/about.webp"
                alt="GymTeam"
                fluid
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default AboutUsPage;
