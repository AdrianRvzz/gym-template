import { Col, Container } from "react-bootstrap";
import { useEffect } from "react";

interface VideoProps {
  title: string;
  subtitle: string;
  src: string;
}

function VideoTrailer({ title, subtitle, src }: VideoProps): React.JSX.Element {
  useEffect(() => {
    const videoElement = document.getElementById("trailer") as HTMLVideoElement;
    if (videoElement) {
      videoElement.volume = 0.05; 
    }
  }, []);

  return (
    <div>
      <Container className="bg-black d-flex flex-equal w-100 my-md-3 ps-md-3 rounded-2">
        <Col className="text-white text-center overflow-hidden me-md-3 px-3 pt-md-5 px-md-5">
          <div className="my-3 py-3">
            <h2 className="fs-1">{title}</h2>
            <p className="lead">{subtitle}</p>
          </div>
          <div
            className="position-relative pb-56p25   rounded-2 "
            style={{ overflow: "hidden" }}
          >
            <video id="trailer" src={src} controls className="w-100" />
          </div>
        </Col>
      </Container>
    </div>
  );
}

export default VideoTrailer;
