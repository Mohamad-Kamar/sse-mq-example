import { useState } from "react";
import Button from "react-bootstrap/Button";

export const ProducerView = ({ targetUrl }) => {
  const [createdMessages, setCreatedMessages] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [messageProps, setMessageProps] = useState({
    queueKey: "",
    message: "",
    durable: false,
  });
  const handleSubmit = () => {
    fetch(`${targetUrl}/producer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageProps),
    }).then((res) => {
      if (res.status !== 201) return setErrorMessage("An error Occurred");
      setCreatedMessages([...createdMessages, messageProps]);
      setErrorMessage("");
    });
  };
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <p>
        <strong>Create a Message:</strong>
      </p>
      <label>Queue Key</label>
      <input
        placeholder="queueKey"
        value={messageProps.queueKey}
        onChange={(e) =>
          setMessageProps({ ...messageProps, queueKey: e.target.value })
        }
      ></input>
      <label>Message Content</label>
      <input
        placeholder="message"
        value={messageProps.message}
        onChange={(e) =>
          setMessageProps({ ...messageProps, message: e.target.value })
        }
      ></input>
      <label>Is Durable?</label>
      <input
        type="checkbox"
        onChange={(e) =>
          setMessageProps({
            ...messageProps,
            durable: e.target.value === "on" ? true : false,
          })
        }
      ></input>
      <Button
        style={{ marginTop: "10px" }}
        variant="primary"
        onClick={handleSubmit}
      >
        Submit
      </Button>
      <hr />
      {errorMessage && (
        <>
          <p style={{ color: "red" }}>{errorMessage}</p>
          <hr />
        </>
      )}

      <div>
        <p>Created Messages:</p>
        {createdMessages.map((message, key) => (
          <p key={key}>
            {message.queueKey} | {message.message}
          </p>
        ))}
      </div>
    </div>
  );
};
