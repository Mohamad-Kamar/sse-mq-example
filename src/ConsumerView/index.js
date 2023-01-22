import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

export const ConsumerView = ({ targetUrl }) => {
  const [receivedMessage, setCreatedMessages] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [connnection, setConnection] = useState(null);
  const [connectionProps, setConnectionProps] = useState({
    queueKey: "",
    consumerID: "",
  });
  const handleSubmit = () => {
    const connectionSearchParamsString = new URLSearchParams(
      connectionProps
    ).toString();
    const urlWithParams = `${targetUrl}/consumer/connect?${connectionSearchParamsString}`;
    try {
      const event = new EventSource(urlWithParams, { withCredentials: false });
      event.onmessage = (message) => {
        setCreatedMessages(message.data);
        setErrorMessage("");
      };
      event.onopen = () => {
        console.log("opened");
      };
      event.onerror = (e) => {
        setErrorMessage("An error Occurred");
        console.log(e);
      };
      setConnection(event);
    } catch (e) {
      return setErrorMessage("An error Occurred");
    }
  };

  useEffect(() => setConnection(null), [targetUrl]);
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <p>
        <strong>Connect to Consumer:</strong>
      </p>
      <label>Queue Key</label>
      <input
        placeholder="queueKey"
        value={connectionProps.queueKey}
        onChange={(e) =>
          setConnectionProps({ ...connectionProps, queueKey: e.target.value })
        }
      ></input>
      <label>Consumer ID</label>
      <input
        placeholder="consumerID"
        value={connectionProps.consumerID}
        onChange={(e) =>
          setConnectionProps({ ...connectionProps, consumerID: e.target.value })
        }
      ></input>
      <Button
        disabled={connnection}
        style={{ marginTop: "10px" }}
        variant="primary"
        onClick={handleSubmit}
      >
        Connect
      </Button>
      <hr />
      {errorMessage && (
        <>
          <p style={{ color: "red" }}>{errorMessage}</p>
          <hr />
        </>
      )}
      <p>Ready State: {connnection && connnection.readyState}</p>
      <div>
        <p>Received Messages</p>
        <p>{receivedMessage}</p>
      </div>
    </div>
  );
};
