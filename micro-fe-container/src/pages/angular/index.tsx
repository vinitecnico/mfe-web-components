import React, { useEffect } from "react";
import { tellComponents } from "../../util";

const PageAngular: React.FC = () => {
  useEffect(() => {
    tellComponents("angular");
  }, []);

  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <h5 className="card-header">Angular</h5>
          <div className="card-body" id="ng-container"></div>
        </div>
      </div>
    </div>
  );
};

export default PageAngular;
