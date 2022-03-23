import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import App from "./App";
import "./index.css";

class ReactElement extends HTMLElement {
  constructor() {
    super();
  }

  convert(propTypes: any, attrName: any, attrValue: any) {
    const propName = Object.keys(propTypes)
      .find(key => key.toLowerCase() === attrName);
    let value = attrValue;
    if (attrValue === 'true' || attrValue === 'false') 
      value = attrValue == 'true';      
    else if (!isNaN(attrValue) && attrValue !== '') 
      value = +attrValue;      
    else if (/^{.*}/.exec(attrValue)) 
      value = JSON.parse(attrValue);
    return {         
      name: propName ? propName : attrName,         
      value: value      
    };
  }

  getProps(attributes: any, propTypes: any) {
    propTypes = propTypes|| {};
    return [ ...attributes ]         
      .filter(attr => attr.name !== 'style')         
      .map(attr => this.convert(propTypes, attr.name, attr.value))
      .reduce((props, prop) => 
        ({ ...props, [prop.name]: prop.value }), {});
  }

  getEvents(propTypes: any) {
    return Object.keys(propTypes)
      .filter(key => /on([A-Z].*)/.exec(key))
      .reduce((events, ev) => ({
        ...events,
        [ev]: (args: any) => 
        this.dispatchEvent(new CustomEvent(ev, { ...args }))
      }), {});
  }

  connectedCallback() {
    const propTypes = {
      name: PropTypes.string,
      onHelloEvt: PropTypes.func
    }

    const props = {
      ...this.getProps(this.attributes, propTypes),
      ...this.getEvents(propTypes),
    }

    ReactDOM.render(<App {...props} />, this);
  }
}

customElements.define("react-el", ReactElement);
