import React from "react";
import PlacarContainer from "./PlacarContainer";

const dados = {
  partida: {
    estadio: "Maracanã/RJ",
    data: "30/06/2018",
    horario: "19h"
  },
  casa: {
    nome: "Vasco"
  },
  visitante: {
    nome: "Flamento"
  }
};

export default class App extends React.Component {
  render() {
    return <PlacarContainer {...dados} />;
  }
}
