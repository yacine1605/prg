import React from "react";
import { Typography } from "antd";
import allache from "./img/allache.png";
const Allache = () => {
  const { Title } = Typography;

  return (
    <>
      <div>
        <Title> L'Allache </Title>
        Poissons bleus Poissons bleu clair de couleur argentée avec le dos
        vert-bleu. Il se distingue de la sardine par une ligne médiane jaune
        séparant le dos du ventre.
      </div>
      <div> Nom scientifique international : Sardinella aurita</div>
      <div>
        <img src={allache} alt="allache" height="300" />
      </div>{" "}
      <div>Classe Actinopterygii Ordre Clupeiformes Famille Clupeidae</div>
      <div> Taille commune relevée 10 à 20 cm</div>
    </>
  );
};
export default Allache;
