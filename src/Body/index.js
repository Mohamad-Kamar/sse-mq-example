import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { QueueView } from "../QueueView";

export const Body = ({ targetUrl }) => {
  return (
    <Container>
      <Row>
        <Col style={{ border: "3px solid blue" }}>
          <QueueView targetUrl={targetUrl} />
        </Col>
        <Col>2 of 3</Col>
        <Col xs={8}>3 of 3 (wider)</Col>
      </Row>
    </Container>
  );
};
