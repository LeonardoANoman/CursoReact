import React from "react";
import DiretaFilho from "./DiretaFilho";

export default (props) => {
  return (
    <div>
      <DiretaFilho texto="Leonardo " numero={23} feio={true}></DiretaFilho>
      <DiretaFilho texto="Duda " numero={3} feio={false}></DiretaFilho>
    </div>
  );
};
