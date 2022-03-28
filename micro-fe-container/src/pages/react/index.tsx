import React, { useEffect } from "react";
import { tellComponents } from "../../util";

const PageReact: React.FC = () => {
  useEffect(() => {
    tellComponents("react");
  });

  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <h5 className="card-header">React</h5>
          <div className="card-body" id="react-container"></div>
        </div>
      </div>
    </div>
  );
};

export default PageReact;
