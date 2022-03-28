import React, { useState } from "react";
import { tellComponents } from "../../util";

const SendMessage: React.FC = () => {
  const [name, setName] = useState("Chris");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div className="row">
      <div className="col">
        <div className="alert alert-info" role="alert">
          <h4 className="alert-heading">What is your name?</h4>
          <div className="form-group">
            <input
              type="text"
              onChange={handleChange}
              className="form-control"
              id="yourName"
              aria-describedby="yourName"
              placeholder="Your name"
              value={name}
            />
            <small id="emailHelp" className="form-text text-muted">
              Enter your name above then click the button below to tell the
              components.
            </small>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() =>
              tellComponents(
                window.location.pathname.includes("angular")
                  ? "angular"
                  : "react"
              )
            }
          >
            Tell the components
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendMessage;
