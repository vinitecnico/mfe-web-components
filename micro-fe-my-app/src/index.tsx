import React from "react";
import ReactDOM, { render } from "react-dom";
import App from './App'
import "./index.css";

class ReactElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    ReactDOM.render(
      <App />,
      this
    );
  }
}

customElements.define("react-el", ReactElement);
