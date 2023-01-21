import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const UrlModal = ({ targetUrl, setTargetUrl }) => {
  const [show, setShow] = useState(false);
  const [inputUrl, setInputUrl] = useState(targetUrl);
  const handleClose = () => setShow(false);
  const handleSave = () => {
    setTargetUrl(inputUrl);
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <Button variant="primary" onClick={handleShow}>
          MQ Url Input
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Message Queue Url</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            URL:{" "}
            <input
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
            ></input>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <pre className="d-flex justify-content-center align-items-center">
        Base URL is: {targetUrl}
      </pre>
    </>
  );
};
