import React from "react";
import { Typography } from "antd";
import sardine from "./img/sardin.jpg";
const Sardine = () => {
  const { Title } = Typography;

  return (
    <>
      <div>
        <Title> Le Sardine </Title>
        La sardine est un poisson typique de la Méditerranée mais elle vit
        également dans les eaux froides des mers du nord où elle a soutenu à
        travers les siècles l’économie de nombreux villages de pêcheurs.
        Parfois, elle se pêche en même temps que les anchois,
      </div>
      <div>Nom scientifique international : Sardina pilchardus</div>
      <div>
        <img src={sardine} alt="sardine" height="400" />
      </div>
      <div>Classe Actinopterygii Ordre Clupeiformes Famille Clupeidae</div>
      <div> Taille commune relevée 10 à 20 cm</div>
    </>
  );
};

export default Sardine;
