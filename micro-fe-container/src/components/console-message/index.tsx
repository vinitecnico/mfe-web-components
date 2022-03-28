import React from "react";

const ConsoleMessage: React.FC = () => {
  return (
    <div className="row console">
      <div className="col">
        <div className="alert alert-dark" role="alert">
          <h4 className="alert-heading">Console</h4>
          <div id="messages"></div>
        </div>
      </div>
    </div>
  );
};

export default ConsoleMessage