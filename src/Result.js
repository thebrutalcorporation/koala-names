import React from "react";
import { Redirect } from "react-router-dom";
import Name from "./Name";

const GIRLS = [
  {
    name: "Ana",
    origin: "Spain",
    meaning: "Gracious, merciful",
    celebrities: ["Ana de Armas", "Ana de la Reguera", "Ana O"],
    popularity: "high",
  },
  {
    name: "Bernessa",
    origin: "Greek",
    meaning: "Victory bringer, strong, brave bear",
    celebrities: ["Bernessa Weber"],
    popularity: "low",
  },
  {
    name: "Serafina",
    origin: "Hebrew",
    meaning: "burning ones",
    celebrities: ["Serafina Salvador", "Gracemarie Serafina", "Serafina Fiore"],
    popularity: "medium",
  },
];
const BOYS = [
  {
    name: "Charles",
    origin: "German",
    meaning: "free man",
    celebrities: [
      "Charles de Gaulle",
      "Charles Chaplin",
      "Charles Prince of Wales",
    ],
    popularity: "high",
  },
  {
    name: "Edward",
    origin: "England",
    meaning: "wealthy guard",
    celebrities: ["Edward Norton", "Edward Teller", "Edward Snowden"],
    popularity: "high",
  },
  {
    name: "Martin",
    origin: "Latin",
    meaning: "dedicated to mars",
    celebrities: ["Martin Scorsese", "Martin Sheen", "Martin Freeman"],
    popularity: "high",
  },
];

const Result = ({ gender, characteristics }) => {
  return !gender || !characteristics ? (
    <Redirect to="/" />
  ) : (
    <>
      {BOYS.map((option) => (
        <Name option={option} />
      ))}
    </>
  );
};

export default Result;
