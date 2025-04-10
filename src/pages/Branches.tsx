

import { Row, Col, Container } from "react-bootstrap";
import { FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { BranchItem, gymBranches } from "../utils/branches"
import Layout from "../components/Layout";

const Branch = ({ title, map, schedules, phone, whatsapp, email }: BranchItem) => {
    return (
      <div className="pt-4">
        <h1 className="text-center fw-bold ">{title}</h1>
  
        <Row className="my-5">
          <iframe
            className="branch-map"
            title={`Mapa de ${title}`}
            src={map}
            style={{ border: 0 }}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </Row>
  
        <Row className="my-5">
          <Col sm={12} md={6} lg={6} className="pb-3">
            <h3>Schedule</h3>
            <table>
              <thead className="fw-normal">
                <tr>
                  <th>Day</th>
                  <th>Hour</th>
                </tr>
              </thead>
              <tbody>
                {schedules.map((schedule, index) => (
                  <tr key={index}>
                    <td>{schedule.day}</td>
                    <td>{schedule.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
  
          <Col className="d-flex flex-column">
            <h3>Contact</h3>
            <a href={"tel:" + phone} className="btn">
              <Row className="rounded-2 d-flex">
                <Col xs="auto" className="p-0">
                  <FaPhone className="fs-4 me-2 align-middle " />
                  <span>{phone}</span>
                </Col>
              </Row>
            </a>
            <a href={"https://wa.me/" + whatsapp} className="btn">
              <Row className="rounded-2 d-flex">
                <Col xs="auto" className="p-0">
                  <FaWhatsapp className="fs-4 me-2 align-middle " />
                  <span>{whatsapp}</span>
                </Col>
              </Row>
            </a>
  
            <a href={`mailto:${email}`} className="btn">
              <Row className="rounded-2 d-flex">
                <Col xs="auto" className="p-0">
                  <FaEnvelope className="fs-4 me-2 align-middle " />
                  <span>{email}</span>
                </Col>
              </Row>
            </a>
          </Col>
        </Row>
      </div>
    );
  };
  

export default function BranchesPage (){
     
      
        return (
          <Layout>
            <Container className="section-branches pb-4">
              {gymBranches.map((branch, index) => (
                <Branch
                  key={index}
                  title={branch.title}
                  map={branch.map}
                  schedules={branch.schedules}
                  phone={branch.phone}
                  whatsapp={branch.whatsapp}
                  email={branch.email}
                />
              ))}
            </Container>
          </Layout>
        );
      
      
}