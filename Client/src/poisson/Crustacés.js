import React from "react";
import { Typography } from "antd";

import { Link } from "react-router-dom";

const Crustacés = () => {
  const { Title } = Typography;
  return (
    <>
      <body>
        <Title>Les Crustacés</Title>
        <ul>
          <li>
            {" "}
            <Link to="Crevette_blanche">Crevette blanche</Link>{" "}
          </li>

          <li>
            {" "}
            <Link to="Crevette_rouge">Crevette rouge</Link>
          </li>
        </ul>
      </body>
    </>
  );
};

export default Crustacés;
