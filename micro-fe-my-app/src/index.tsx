import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

class ReactElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log("here >>>", this);
    const props = {
      name: this.getAttribute("name"),
      onhelloevt: this.getAttribute("onhelloevt")
    };

    ReactDOM.render(<App {...props} />, this);
  }
}

customElements.define("react-el", ReactElement);
