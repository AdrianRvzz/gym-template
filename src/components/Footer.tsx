import GymLogo from "../assets/gymlogo.jpg";

import { BsFacebook, BsInstagram } from "react-icons/bs";
import { Container, Dropdown, Image} from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-black footer">
      <Container className="">
        <footer className="d-flex justify-content-between align-items-center sm-justify-content-center border-bottom py-4 row">
          <div className="col d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <Link to="/home">
          <Image
              src={GymLogo}
              alt="Gym"
              height="50"
              className="d-inline-block align-top"
            />
          </Link>
          </div>


          <ul className="nav col d-flex justify-content-center">
            <li className="nav-item">
              <a
                href="https://www.facebook.com"
                className="nav-link px-2 text-white fs-4"
              >
                <BsFacebook />
              </a>
            </li>

            <li className="nav-item">
              <a
                href="https://www.instagram.com"
                className="nav-link px-2 text-white fs-4"
              >
                <BsInstagram />
              </a>
            </li>
          </ul>

          <ul className="nav col justify-content-end">
            <li className="nav-item">
              <Link to="/about" className="nav-link px-2 text-white">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/branches" className="nav-link px-2 text-white">
                Branches
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link px-2 text-white">
                Contact Us
              </Link>
            </li>
         
          </ul>
        </footer>

        <Dropdown.Divider />

        <footer className="d-flex py-3 row">
          <a
            href=""
            className="d-flex align-items-center justify-content-center text-muted text-decoration-none pb-3"
          ></a>

          <span className="d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto text-muted text-decoration-none disabled">
            © 2025 Gym
          </span>
        </footer>
      </Container>
    </div>
  );
}

export default Footer;
