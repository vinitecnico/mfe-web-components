import React, { useEffect, useState } from "react";
import Routes from "./routes";
import { tellComponents } from "./util";

const App: React.FC = () => {
  const [name, setName] = useState("Chris");
  useEffect(() => {
    ["http://localhost:5001/main.js", "http://localhost:5005/main.js"].forEach(
      (urlMfe) => {
        const script = document.createElement("script");
        script.src = urlMfe;
        document.body.appendChild(script);
      }
    );

    return () => {
      const list = document.getElementById("script");
      console.log('here >>>', list)
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div className="App">
      <div className="container">
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

        {/* added router */}
        <Routes />
        {/* added router */}

        <div className="row console">
          <div className="col">
            <div className="alert alert-dark" role="alert">
              <h4 className="alert-heading">Console</h4>
              <div id="messages"></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="repo">
            <a
              href="https://github.com/vinitecnico/mfe-web-components"
              target="_blank"
              rel="noreferrer"
            >
              View this code repository on github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
