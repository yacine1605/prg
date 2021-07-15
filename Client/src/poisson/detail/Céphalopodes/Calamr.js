import React from "react";
import { Typography } from "antd";

import calmar from "./img/calamr.png";
function Calamr() {
  const { Title } = Typography;

  return (
    <>
      <div>
        <Title> Calmar </Title>Mollusque céphalopode de couleur laiteuse aux
        teintes du rougeâtre-rose au brun, le calmar se caractérise par la
        présence de dix tentacules, dont deux plus longs.
      </div>
      <div>Nom scientifique international : Loligo vulgaris</div>
      <div>
        <img src={calmar} alt="calmar" height="300" />
      </div>
      <div>Classification Cephalopoda Ordre Myopsida Famille Loliginidae</div>
      <div>Taille commune relevée 20 à 50 cm</div>
    </>
  );
}

export default Calamr;
