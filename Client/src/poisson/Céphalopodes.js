import React from "react";
import { Typography } from "antd";
import { Link } from "react-router-dom";

const Céphalopodes = () => {
  const { Title } = Typography;
  return (
    <>
      <body>
        <Title>Les Céphalopodes</Title>
        <ul>
          <li>
            <Link to="Céphalopodes/Calmar">Calmar</Link>
          </li>{" "}
          <li>
            <Link to="Céphalopodes/poulpe">Poulpe</Link>
          </li>{" "}
          <li>
            <Link to="Céphalopodes/sepia">Sepia</Link>
          </li>
        </ul>
      </body>
    </>
  );
};

export default Céphalopodes;
