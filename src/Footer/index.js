import "./index.css";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => (
  <div className="footer-section">
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <div className="footer-content-section">
            <h3>Subscribe our NewsLetter For More Updates</h3>
            <p>
              By subscribing to the newsletter, users will receive regular email
              communications from the organization, which can include news and
              updates, special offers, and exclusive content.
            </p>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="footer-content-section-2">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="email-field"
            />
            <br />
            <button className="subscribe-btn">Subscribe </button>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;
