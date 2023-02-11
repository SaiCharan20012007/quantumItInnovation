import "./index.css";
import { FiSettings } from "react-icons/fi";
import { IoIosFolderOpen } from "react-icons/io";
import { AiOutlineCloud } from "react-icons/ai";
import { BsTools } from "react-icons/bs";
import { Container, Row, Col } from "react-bootstrap";

const Section2 = () => (
  <div className="section-2-container ">
    <Container>
      <Row>
        <Col xs={12} md={6} className="section-2a">
          <div className="section-2a">
            <h1>We have Many Years Experience in Consulate Business</h1>
            <p className="section-a-des">
              Investment: Investing in growth opportunities is an important
              aspect of business finances. This includes investing in equipment,
              marketing, and new products or services. Tax planning: Proper tax
              planning helps a business to minimize its tax liability and
              maximize its profits.
            </p>
            <button className="start-btn">Know More </button>
          </div>
        </Col>

        <Col className="section-1b" xs={12} md={6}>
          <img
            src="https://png.pngtree.com/png-clipart/20220222/original/pngtree-data-analysis-concept-with-business-people-character-are-analyzes-charts-and-png-image_7303114.png"
            alt="emp"
            className="section2-image"
          />
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col xs={6} md={3} className="tini-section">
          <FiSettings className="tiny-logo" />
          <h3>Contruction</h3>
        </Col>
        <Col xs={6} md={3} className="tini-section">
          <AiOutlineCloud className="tiny-logo" />
          <h3>DummyLogo</h3>
        </Col>
        <Col xs={6} md={3} className="tini-section">
          <IoIosFolderOpen className="tiny-logo" />
          <h3>Random Logo</h3>
        </Col>
        <Col xs={6} md={3} className="tini-section">
          <BsTools className="tiny-logo" />
          <h3>DummyLogo</h3>
        </Col>
      </Row>
    </Container>
  </div>
);
export default Section2;
