import React from "react";
import { Typography } from "antd";
import saurle from "./img/saurle.png";
const Saurle = () => {
  const { Title } = Typography;

  return (
    <>
      <div>
        <Title> Saurle </Title>
        Poissons bleus Poissons bleus de taille moyenne à petite avec corps
        allongé légèrement comprimé sur les côtés, très grands yeux et grande
        bouche. Il présente sur les côtés une ligne irrégulière de boucliers
        osseux épineux. Sa coloration est bleuté-vert, dégradante aux hanches
        dans un argent métallique. Blanche-cœur la coloration du ventre.a taille
        minimum autorisée pour la pêche est de 15 cm.
      </div>
      <div>Nom scientifique international : Trachurus trachurus</div>{" "}
      <div>
        <img src={saurle} alt="sardine" height="300" />
      </div>
      <div>Classe :Actinopterygii Ordre :Clupeiformes Famille :Clupeidae</div>
      <div> Taille commune relevée 10 à 15 cm</div>
    </>
  );
};

export default Saurle;
