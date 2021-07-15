import React from "react";
import { Typography } from "antd";
import pageot from "./img/Pagello.png";

const Pageot = () => {
  const { Title } = Typography;

  return (
    <>
      {" "}
      <div>
        <Title> Pageot </Title>
        poissons au corps allongé, fusiformes, recouverts de grosses écailles.
        Grand œil, bouche horizontale placée en bas. Il présente une coloration
        rougeâtre-argentée sur le dos, plus claire sur les hanches et blanchâtre
        sur le ventre. Il a une tache sombre caractéristique à l’attachement des
        nageoires pectorales.
      </div>{" "}
      <div>Nom scientifique international : Pagellus </div>{" "}
      <div>
        <img src={pageot} alt="pageot" height="300" />
      </div>
      <div>Classe :Actinopterygii Ordre :Perciformes Famille :Sparidae</div>
      <div> Taille commune relevée 10 à 15 cm</div>
    </>
  );
};

export default Pageot;
