import "../App.css";
import Layout from "../components/Layout";
import { Col, Container, Modal, Row, Image, Button } from "react-bootstrap";

import { useState } from "react";
import classesData from "../utils/classes";

interface ClassItem {
  id: number;
  src: string;
  title: string;
  description: string;
  branches: string[];
}

function ClassesPage(): React.JSX.Element {
  const [showModal, setShowModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState<ClassItem | undefined>(
    undefined
  );

  const handleOpenModal = (classItem: ClassItem) => {
    setSelectedClass(classItem);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Layout>
         <div className="classesContainer bg-black">
          <Container fluid="lg" className="m-t-5">
            <Row>
              {classesData.map((classItem: ClassItem) => (
                <Col
                  sm={6}
                  md={4}
                  lg={4}
                  key={classItem.id}
                  className="col-hover mb-2"
                >
                  <Image
                    fluid
                    src={classItem.src}
                    alt={classItem.title}
                    onClick={() => handleOpenModal(classItem)}
                    className="rounded"
                  />
                </Col>
              ))}
            </Row>
          </Container>

          <Modal
            show={showModal}
            onHide={handleCloseModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            className="rounded "
            centered
          >
            <div className="mod-body border rounded">
              <Modal.Header>
                <Modal.Title>
                  <h2>{selectedClass && selectedClass.title}</h2>
                </Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <Image
                  fluid
                  src={selectedClass && selectedClass.src}
                  alt={selectedClass && selectedClass.title}
                  className="modal-body-image m-auto rounded"
                />

                <div className="py-1">
                  {selectedClass && selectedClass.branches.length > 0 ? (
                    selectedClass.branches.map((branch, index) => (
                      <span key={index} className="badge span-modal me-1">
                        {branch}
                      </span>
                    ))
                  ) : (
                    <span className="badge span-modal me-1">Coming Soon</span>
                  )}
                </div>

                <p>{selectedClass && selectedClass.description}</p>
              </Modal.Body>

              <Modal.Footer>
                <Button
                  variant="dark"
                  className="btn"
                  onClick={handleCloseModal}
                >
                  Close
                </Button>
              </Modal.Footer>
            </div>
          </Modal>
        </div>
    </Layout>
      
     
      
    
  );
}

export default ClassesPage;
