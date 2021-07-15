import React from "react";
import { Typography } from "antd";
import dorade from "./img/orata.png";

const Dorade = () => {
  const { Title } = Typography;
  return (
    <>
      <div>
        <Title> Dorade </Title>
        Poissons Poissons de taille moyenne à corps ovale grand et comprimés sur
        les côtés typiques des disparus. La tête présente un profil raide.
        L’opéracle présente une bande noire, bande dorée au sommet de la tête.
        Couleur gris argenté avec reflets bleu clair - doré.
      </div>
      <div>Nom scientifique international : Sparus aurata</div>
      <div>
        <img src={dorade} alt="sardine" height="300" />
      </div>
      <div>Classe : Actinopterygii Ordre : Perciformes Famille : Sparidae</div>
      <div>Taille commune relevée 20 à 50 cm</div>
    </>
  );
};

export default Dorade;
