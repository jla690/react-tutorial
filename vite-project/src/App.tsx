import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let [visibility, setVisibility] = useState(false);

  return (
    <div>
      {visibility && <Alert onClick={() => setVisibility(false)}>Text</Alert>}
      <Button onClick={() => setVisibility(true)}>Click here!</Button>
    </div>
  );
}

export default App;
