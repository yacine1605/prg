import React from "react";
import { Typography } from "antd";
import anchois from "./img/anchois.png";
const Anchois = () => {
  const { Title } = Typography;

  return (
    <>
      <div>
        <Title> Le Anchois </Title>
        Poissons bleus Poissons bleu argenté sur les hanches et blanchâtre sur
        le ventre. Le dos est parcouru par une bande bleue, avec des nuances
        vertes. Semblable à la sardine, elle se distingue par un corps plus
        mince et plus effilé et une mâchoire supérieure plus longue.
      </div>
      <div>Nom scientifique international : Engraulis encrasicolus</div>
      <div>
        <img src={anchois} alt="sardine" height="300" />
      </div>
      <div>Classe :Actinopterygii Ordre :Clupeiformes Famille :Clupeidae</div>
      <div> Taille commune relevée 10 à 15 cm</div>
    </>
  );
};

export default Anchois;
