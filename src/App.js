import { useState } from "react";
import { UrlModal } from "./UrlModal";

const App = () => {
  let [targetUrl, setTargetUrl] = useState("http://localhost:3491");
  return <UrlModal targetUrl={targetUrl} setTargetUrl={setTargetUrl} />;
};

export default App;
