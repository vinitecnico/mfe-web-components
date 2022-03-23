import React from "react";
import "./App.css";

const App = ({
  name,
  onHelloEvt,
}: {
  name?: string | null;
  onHelloEvt: any;
} | any) => {
  return (
    <div className="exampleComponent">
      <img src="/images/react.png" alt="React Logo" className="logo" />
      <p>
        Hello <strong>{name}</strong> from your friendly React component.
      </p>
      <button
        className="btn btn-secondary"
        onClick={onHelloEvt}
      >
        Say hello
      </button>
    </div>
  );
};

export default App;
