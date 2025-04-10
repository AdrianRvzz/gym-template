import { useState } from 'react';
import Layout from '../components/Layout';
import Image from 'react-bootstrap/Image';
import { Row, Col, Container, Modal, Button } from 'react-bootstrap';
import { gymServices, ServiceItem} from '../utils/services';

function ServicesPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem>();

  const handleOpenModal = (service: ServiceItem) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedService(undefined);
  };

 
  return (

    <Layout>
      <div className="classesContainer bg-black d-flex align-items-center" >
        <Container fluid="lg" >
          <Row className='d-flex align-items-center'>
            {gymServices.map((service) => (
              <Col sm={6} md={4} lg={4} key={service.id} className="col-hover mb-2">
                <Image
                  fluid
                  src={service.image}
                  alt={service.title}
                  onClick={() => handleOpenModal(service)}
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
          centered
        >
          <div className="mod-body border rounded">
            <Modal.Header>
              <Modal.Title>
                <h2>{selectedService?.title}</h2>
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              {selectedService?.image?.endsWith('.mp4') ? (
                <video
                  src={selectedService.image}
                  controls
                  className="modal-body-video m-auto rounded text-center"
                />
              ) : (
                <Image
                  fluid
                  src={selectedService?.image}
                  alt={selectedService?.title}
                  className="modal-body-image m-auto rounded w-100"
                />
              )}

              <div className="py-1">
                {selectedService && selectedService.branches.length > 0 ? (
                  selectedService.branches.map((service, index) => (
                    <span key={index} className="badge span-modal me-1">
                      {service}
                    </span>
                  ))
                ) : (
                  <span className="badge span-modal me-1">Soon</span>
                )}
              </div>
              <p>{selectedService?.description}</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="dark" onClick={handleCloseModal}>
                Cerrar
              </Button>
            </Modal.Footer>
          </div>
        </Modal>
      </div>
    </Layout>
     
  );
}

export default ServicesPage;
