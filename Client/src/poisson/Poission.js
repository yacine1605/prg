import React from "react";
import { Typography } from "antd";

import { Link } from "react-router-dom";

const Poission = () => {
  const { Title } = Typography;
  return (
    <>
      <body>
        <Title>Les poission</Title>
        <ul>
          <li>
            <Link to="poission/Sardine">Sardine</Link>
          </li>
          <li>
            {" "}
            <Link to="poission/Allache">Allache</Link>
          </li>
          <li>
            {" "}
            <Link to="poission/Anchois">Anchois</Link>
          </li>
          <li>
            {" "}
            <Link to="poission/Pageot"> Pageot</Link>
          </li>
          <li>
            {" "}
            <Link to="poission/Espadon">Espadon</Link>
          </li>
          <li>
            {" "}
            <Link to="poission/Merlan">Merlan</Link>
          </li>
          <li>
            {" "}
            <Link to="poission/Dorade">Dorade</Link>
          </li>
          <li>
            {" "}
            <Link to="poission/Saurle">Saurle</Link>
          </li>{" "}
          <li>
            {" "}
            <Link to="poission/Rouget">Rouget</Link>
          </li>
        </ul>
      </body>
    </>
  );
};

export default Poission;
