import React from "react";
import { Typography } from "antd";
import rouget from "./img/rouget.png";

const Rouget = () => {
  const { Title } = Typography;
  return (
    <>
      <div>
        <Title> Saurle </Title>
        Poissons de petite taille avec corps allongé et tête au profil oblique.
        Il comporte une paire de barbes sous la mâchoire inférieure. La
        coloration est rose rougeâtre, tendant vers l’argent sur le ventre avec
        de nombreuses taches.
      </div>
      <div>Nom scientifique international : Trachurus trachurus</div>

      <div>
        <img src={rouget} alt="sardine" height="300" />
      </div>
      <div>Classe : Actinopterygii Ordre : Perciformes Famille : Mullidae </div>
      <div> Taille commune relevée 15 à 35 cm </div>
    </>
  );
};

export default Rouget;
