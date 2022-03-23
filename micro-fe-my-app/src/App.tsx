import React from "react";
import "./App.css";

const App = ({
  name,
  onhelloevt,
}: {
  name?: string | null;
  onhelloevt: any;
}) => {
  const handerClick = () => {
    console.log("here >>>", name, onhelloevt);
    onhelloevt()
  }
  return (
    <div className="exampleComponent">
      <img src="/images/react.png" alt="React Logo" className="logo" />
      <p>
        Hello <strong>{name}</strong> from your friendly React component.
      </p>
      <button
        className="btn btn-secondary"
        onClick={handerClick}
      >
        Say hello
      </button>
    </div>
  );
};

export default App;
