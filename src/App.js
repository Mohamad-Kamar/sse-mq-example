import { useState } from "react";
import { Body } from "./Body";
import { UrlModal } from "./UrlModal";

const App = () => {
  let [targetUrl, setTargetUrl] = useState("http://localhost:3491");
  return (
    <>
      <UrlModal targetUrl={targetUrl} setTargetUrl={setTargetUrl} />
      <Body></Body>
    </>
  );
};

export default App;
