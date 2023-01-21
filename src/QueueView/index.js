import { useState } from "react";
import Button from "react-bootstrap/Button";

export const QueueView = ({ targetUrl }) => {
  const [createdQueues, setCreatedQueues] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [queueProps, setQueueProps] = useState({ queueKey: "", queueType: "" });
  const handleSubmit = () => {
    fetch(`${targetUrl}/queue`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(queueProps),
    }).then((res) => {
      if (res.status !== 201) return setErrorMessage("An error Occurred");
      setCreatedQueues([...createdQueues, queueProps]);
      setErrorMessage("");
    });
  };
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <p>
        <strong>Create a Queue:</strong>
      </p>
      <label>Queue Key</label>
      <input
        placeholder="queueKey"
        value={queueProps.queueKey}
        onChange={(e) =>
          setQueueProps({ ...queueProps, queueKey: e.target.value })
        }
      ></input>
      <label>Queue Type</label>
      <input
        placeholder="queueType"
        value={queueProps.queueType}
        onChange={(e) =>
          setQueueProps({ ...queueProps, queueType: e.target.value })
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
        <p>Created Queues:</p>
        {createdQueues.map((queue, key) => (
          <p key={key}>
            {queue.queueKey} | {queue.queueType}
          </p>
        ))}
      </div>
    </div>
  );
};
