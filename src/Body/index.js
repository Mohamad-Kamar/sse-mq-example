import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { QueueView } from "../QueueView";
import { ProducerView } from "../ProducerView";
import { ConsumerView } from "../ConsumerView";

export const Body = ({ targetUrl }) => {
  return (
    <Container>
      <Row>
        <Col style={{ border: "3px solid blue" }}>
          <QueueView targetUrl={targetUrl} />
        </Col>
        <Col style={{ border: "3px solid blue" }}>
          <ProducerView targetUrl={targetUrl} />
        </Col>
        <Col style={{ border: "3px solid blue" }} xs={8}>
          <ConsumerView targetUrl={targetUrl} />
        </Col>
      </Row>
    </Container>
  );
};
