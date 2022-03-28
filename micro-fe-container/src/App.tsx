import React, { useEffect, useState } from "react";
import { ConsoleMessage, SendMessage } from "./components";
import Routes from "./routes";

const App: React.FC = () => {
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

  return (
    <div className="App">
      <div className="container">
        <SendMessage />
        {/* added router */}
        <Routes />
        {/* added router */}

        <ConsoleMessage />

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
