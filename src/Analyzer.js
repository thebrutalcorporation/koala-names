import React from "react";
import { useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { Flex, Heading, Spinner } from "@chakra-ui/react";
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
    <Flex align="center" justifyContent="center" flexDirection="column">
      <Heading p={5} as="h1" size="md">
        Our laowei is searching for the perfect name for you!
      </Heading>

      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color={gender === "boy" ? "blue.200" : "red.200"}
        size="xl"
      />

      <Lottie animationData={loader} />
    </Flex>
  );
};

export default Analyzer;
