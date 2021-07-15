import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "antd";

const Espace = () => {
  const { Title } = Typography;
  return (
    <>
      <body>
        <Title> Les Espaces</Title>
        <ul>
          <li>
            <Link to="/espace/poission">Poissons</Link>
          </li>
          <li>
            <Link to="/espace/crustacés">Crustacés</Link>
          </li>
          <li>
            <Link to="/espace/Céphalopodes">Céphalopodes</Link>
          </li>
        </ul>
      </body>
    </>
  );
};

export default Espace;
