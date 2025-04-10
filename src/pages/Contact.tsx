
import { Form, Alert, Button } from 'react-bootstrap';
import { useState } from 'react';
import Layout from '../components/Layout';

interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

function ContactPage () {
  const [error, setError] = useState<string>('');
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const submit = async () => {
    const { name, email, phone, subject, message } = formData;

    // Check for empty fields
    if (name.trim() === '' || email.trim() === '' || phone.trim() === '' || subject.trim() === '' || message.trim() === '') {
      setError('Please fill in all the fields');
      return;
    }

    // Submit the form data (you can implement the submission logic here)
    console.log('Form submitted', formData);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  return (

      <Layout>
        <section className="contactContainer ">
        <div className="  card my-4">
          <div className=" p-md-3 text-black">
            <h3 className="mb-4 text-center text-uppercase">Contact</h3>
            {error && <Alert variant="danger">{error}</Alert>}

            <Form.Group className="mb-4" controlId="name">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="subject">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter your message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Button type="button" variant="dark" onClick={submit}>
              Send Message
            </Button>
          </div>
        </div>
      </section>
      </Layout>
   

  );
};

export default ContactPage;
