import React from "react";
import { Typography } from "antd";

import sepia from "./img/Sepia.png";
function Sepia() {
  const { Title } = Typography;

  return (
    <>
      <div>
        <Title> Sepia </Title>
        Mollusque céphalopode décapode du corps ovale et aplati. Il comporte
        huit bras plus courts, munis de quatre séries de ventouses, et deux
        rétractels plus longs. La bouche est avec un bec, semblable à celui du
        perroquet. La couleur du dos est variable du brun-noir au jaunâtre, avec
        des stries claires transversales.
      </div>
      <div>Nom scientifique international : Sepia officinalis</div>
      <div>
        <img src={sepia} alt="sepia" height="300" />
      </div>
      <div>Class: Cephalopoda Ordre: Sepiida Famille :Sepiidae</div>
      <div>Taille commune relevée 20 à 50 cm</div>
    </>
  );
}

export default Sepia;
