import React from "react";
import { useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import Lottie from "lottie-react";
import loader from "./loader.json";

const delay = 10;

const Analyzer = ({ gender, characteristics }) => {
  const history = useHistory();

  useEffect(() => {
    const timer1 = setTimeout(() => history.push("/result"), delay * 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);
  return !gender || !characteristics ? (
    <Redirect to="/" />
  ) : (
    <>
      <h3>HOLD ON TO YOUR BUTTS!! We're finding the perfect name for you! </h3>
      <Lottie animationData={loader} />
    </>
  );
};

export default Analyzer;
