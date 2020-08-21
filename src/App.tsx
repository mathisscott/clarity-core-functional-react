import React from "react";
import Form from "./Form";

function App() {
  return (
    <div
      className="form-container"
      cds-layout="vertical align:horizontal-stretch p-x:lg p-y:xl"
    >
      <h1 cds-text="heading center">Ohai</h1>
      <Form />
    </div>
  );
}

export default App;
