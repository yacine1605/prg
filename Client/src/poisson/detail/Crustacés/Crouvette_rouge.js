import React from "react";
import { Typography } from "antd";
import crouget from "./img/crouge.png";
const Crouvette_rouge = () => {
  const { Title } = Typography;
  return (
    <>
      <div>
        <Title> Le Anchois </Title>
      </div>
      <div>Nom scientifique international : Engraulis encrasicolus</div>{" "}
      <div>
        <img src={crouget} alt="sardine" height="300" />
      </div>
      <div>Classe :Actinopterygii Ordre :Clupeiformes Famille :Clupeidae</div>
      <div> Taille commune relevée 10 à 15 cm</div>
    </>
  );
};

export default Crouvette_rouge;
