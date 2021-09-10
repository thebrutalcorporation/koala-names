import React from "react";
import { Button, Stack } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

function GenderSelect({ setGender }) {
  const history = useHistory();

  function handleClick() {
    history.push("/selection");
  }
  return (
    <Stack spacing={4} direction="row">
      <Button
        colorScheme="blue"
        borderRadius="8px"
        py="4"
        px="4"
        lineHeight="1"
        size="md"
        onClick={() => {
          setGender("boy");
          handleClick();
        }}
      >
        boy
      </Button>
      <Button
        colorScheme="pink"
        borderRadius="8px"
        py="4"
        px="4"
        lineHeight="1"
        size="md"
        onClick={() => {
          setGender("girl");
          handleClick();
        }}
      >
        girl
      </Button>
    </Stack>
  );
}

export default GenderSelect;
