import React from "react";
import { Typography } from "antd";

import poulpe from "./img/Polpe.png";
function Poulpe() {
  const { Title } = Typography;

  return (
    <>
      <div>
        <Title> Poulpe </Title>
        Mollusque céphalopode ottopode, avec corps ovale en forme de sac d’où
        partent huit tentacules munis de deux rangées de ventouses. La
        coloration est changeante et va du gris au jaune, avec des taches
        possibles de différentes couleurs telles que le vert ou certaines
        nuances de rouge et de brun
      </div>

      <div>Nom scientifique international : Octopus vulgaris</div>
      <div>
        <img src={poulpe} alt="poulpe" height="300" />
      </div>
      <div>Class: Cephalopoda Ordre : Myopsida Famille : Loliginidae</div>
      <div>Taille commune relevée 20 à 50 cm</div>
    </>
  );
}

export default Poulpe;
