import * as React from "react";
import { Col } from "antd";

import { FormularioPage } from "./components/FormularioPage";

function App() {
  return (
    <div className="containter-fluid">
      <Col span={24}>
        <FormularioPage />
      </Col>
    </div>
  );
}

export default App;
