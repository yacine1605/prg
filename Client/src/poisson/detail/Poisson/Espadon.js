import React from "react";
import { Typography } from "antd";
import espadan from "./img/Spada.png";
const Espadon = () => {
  const { Title } = Typography;

  return (
    <>
      <div>
        <Title> Espadon (Poissons d’épée)</Title>
        Poissons de grande taille caractérisés par des os de la mâchoire qui
        forment comme deux épées, courte celle de la mâchoire inférieure, longue
        et en forme de véritable rougeur celle de la mâchoire supérieure. Le
        corps est bleu-bleu sur le dos, argenté sur les hanches et blanchâtre
        sur le ventre.
      </div>
      <div>Nom scientifique international : Xiphias gladius)</div>
      <div>
        <img src={espadan} alt="sardine" height="300" />
      </div>
      <div>Class: Actinopterygii Order: Istiophoriformes Family: Xiphiidae</div>
      <div>
        Il peut atteindre les 4 m de longueur et peser 500 kg. La taille minimum
        autorisée pour la pêche est de 140 cm
      </div>
    </>
  );
};

export default Espadon;
