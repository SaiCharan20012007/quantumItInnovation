import "./index.css";
import { Container, Row, Col } from "react-bootstrap";

const Section1 = () => (
  <div className="section-1-container ">
    <Container>
      <Row>
        <Col xs={12} md={6} className="section-1a">
          <div className="section-1a">
            <p className="section-a-des">
              Business finances refer to the financial management and control of
              a business's money. This includes financial planning,
              record-keeping, and decision-making.
            </p>
            <h1>We are Consulating For Your Business Finances</h1>
            <p className="section-a-des">
              Budgeting: Creating a budget and sticking to it is essential for
              financial management. A budget helps a business plan for and track
              its expenses, revenue, and profits.Financial Planning: This
              involves creating a long-term plan for managing a business's
              finances. It includes setting financial goals, determining how
              much money is needed to achieve these goals, and creating a plan
              to generate the necessary funds.
            </p>
            <button className="start-btn">Start Now </button>
          </div>
        </Col>

        <Col className="section-1b" xs={12} md={6}>
          <img
            src="https://png.pngtree.com/png-clipart/20220419/original/pngtree-people-working-in-a-table-meeting-and-the-co-working-shared-png-image_7537097.png"
            alt="emp"
            className="section1-image"
          />
        </Col>
      </Row>
    </Container>
  </div>
);
export default Section1;
