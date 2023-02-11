import "./index.css";
import { Container, Col, Row } from "react-bootstrap";
import { GiReceiveMoney } from "react-icons/gi";
import { FcAdvertising } from "react-icons/fc";
import { HiOutlineCash } from "react-icons/hi";

const Section3 = () => (
  <div className="section-3-container">
    <h2 className="section-3-title">Our Services</h2>
    <Container>
      <Row>
        <Col xs={12} md={4}>
          <div className="service-card1">
            <div className="service-mini-card">
              <GiReceiveMoney className="mini-card-icon" />
            </div>
            <div className="service-card-description">
              <h3>Financial Consulting</h3>
              <p>
                Financial consultants may also provide ongoing support and
                advice to clients, monitoring their progress and making
                adjustments to their financial plan as necessary.
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="service-card2">
            <div className="service-mini-card">
              <FcAdvertising className="mini-card-icon" />
            </div>
            <div className="service-card-description">
              <h3>Content Marketing</h3>
              <p>
                Content marketing is a strategic approach to creating and
                distributing valuable, relevant, and consistent content to
                attract and retain a clearly .
              </p>
            </div>
          </div>
          <div className="all-s-b">
            <button className="all-services-btn">All Services </button>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="service-card1">
            <div className="service-mini-card">
              <HiOutlineCash className="mini-card-icon" />
            </div>
            <div className="service-card-description">
              <h3>Finance Advice</h3>
              <p>
                Create a budget: Understanding your income and expenses is th e
                your spending to ensure that you are living wi thin your means.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Section3;
