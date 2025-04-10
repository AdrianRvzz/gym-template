import { Container } from 'react-bootstrap';
import Layout from '../components/Layout';

interface ErrorPageProps {
  codeError: string;
  errorMessage: string;
  help: string;
}

export default function ErrorPage({ codeError, errorMessage, help }:ErrorPageProps) {
  return (
    <Layout>
        <Container className='vh-100 d-flex align-items-center justify-content-center'>
        <div className='text-center'>
          <h1 className='display-1 mb-4'>{codeError}</h1>
          <h1 className='mb-4 display-5'>{errorMessage}</h1>
          <span className='text-secondary'>{help}</span>
        </div>
      </Container>
    </Layout>
  );
};

