import { useState } from 'react';
import { Modal, Button, Form, Alert, CloseButton } from 'react-bootstrap';
import wallpaper from '../assets/slide.png'
import { ModalProps } from './SignUp';


export default function LoginModal({ showModal, closeModal }: ModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submit = () => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Perform login logic (e.g., authentication)
    setError('');
    alert('Logged in!');
    closeModal();
  };

  return (
    <Modal show={showModal} onHide={closeModal} centered size="xl">
      <Modal.Body className="p-0">
        <CloseButton onClick={closeModal} className="position-absolute top-0 end-0 m-3" />
        <div className="d-flex h-100">
          <div className="col-6 d-none d-lg-block">
            <img src={wallpaper} alt="Wallpaper" className="w-100 h-100 object-fit-cover" />
          </div>

          <div className="col-12 col-lg-6 p-4">
            <h3 className="mb-4 text-uppercase">Login</h3>
            {error && <Alert variant="danger">{error}</Alert>}
            
            <Form>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button variant="dark" className="w-100" onClick={submit}>
                Login
              </Button>
            </Form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

