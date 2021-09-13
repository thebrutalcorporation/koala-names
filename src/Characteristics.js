import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Button,
  Checkbox,
  Flex,
} from "@chakra-ui/react";
import GenderSelect from "./GenderSelect";
import { useHistory } from "react-router-dom";

const CHARACTERISTICS_OPTIONS = [
  { name: "elegant", icon: "🕊" },
  { name: "sporty", icon: "🏃🏻‍♂️" },
  { name: "sensitive", icon: "❤️" },
  { name: "insistent", icon: "🏔" },
  { name: "confident", icon: "💪🏼" },
  { name: "honest", icon: "🤝" },
  { name: "clever", icon: "🎓" },
  { name: "creative", icon: "💡" },
  { name: "optimistic", icon: "🙂" },
  { name: "reliable", icon: "⛓" },
  { name: "keen", icon: "👁" },
  { name: "empathetic", icon: "💕" },
];

const Characteristics = ({
  gender,
  limit,
  setLimit,
  setGender,
  characteristics,
  setCharacteristics,
}) => {
  const history = useHistory();

  const handleSelection = (characteristicName) => {
    const characteristicsCopy = characteristics;

    // Find index
    const findIdx = characteristics.indexOf(characteristicName);

    if (findIdx > -1) {
      characteristicsCopy.splice(findIdx, 1);
      setLimit(false);
    } else if (characteristicsCopy.length >= 5) {
      setLimit(true);
      return;
    } else if (!limit) {
      characteristicsCopy.push(characteristicName);
    }

    setCharacteristics(() => [...characteristicsCopy]);
  };

  const handleSubmit = () => {
    return history.push("/analyze");
  };

  return (
    <Flex
      width="full"
      align="center"
      justifyContent="center"
      flexDirection="column"
    >
      {limit && (
        <Alert
          variant="subtle"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          status="error"
        >
          <AlertIcon />
          <AlertTitle mr={2}>You can only select 5 options.</AlertTitle>
        </Alert>
      )}
      <Flex
        width="full"
        my={4}
        textAlign="left"
        flexDirection="column"
        justifyContent="center"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {!gender && <GenderSelect setGender={setGender} />}
          <Flex flexWrap="wrap" justifyContent="center">
            {gender &&
              CHARACTERISTICS_OPTIONS.map((characteristic) => (
                <Flex
                  borderWidth="1px"
                  borderRadius="lg"
                  justifyContent="center"
                  width={160}
                  height={100}
                  p={4}
                  m={2}
                  key={characteristic.name}
                >
                  <Checkbox
                    colorScheme={gender === "boy" ? "blue" : "pink"}
                    isDisabled={
                      limit && !characteristics.includes(characteristic.name)
                    }
                    onChange={() => handleSelection(characteristic.name)}
                    isChecked={characteristics.includes(characteristic.name)}
                  >
                    {characteristic.icon}
                    {characteristic.name}
                  </Checkbox>
                </Flex>
              ))}
          </Flex>
          <Flex justifyContent="center" mt={5}>
            {characteristics.length === 5 && (
              <Button
                colorScheme={gender === "boy" ? "blue" : "pink"}
                w={["20%", "50%", "250px", "250px"]}
                type="submit"
              >
                Submit
              </Button>
            )}
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};

export default Characteristics;
