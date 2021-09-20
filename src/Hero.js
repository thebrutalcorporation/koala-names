import React from "react";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";

import Koala from "./koala/Koala";
import GenderSelect from "./GenderSelect";

function Hero({
  title,
  subtitle,
  setGender,
  isCursorActive,
  setCursorActive,
  ...rest
}) {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="70vh"
      px={8}
      mb={16}
      {...rest}
    >
      <Stack
        spacing={4}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={["center", "center", "left", "left"]}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          {subtitle}
        </Heading>
        <GenderSelect setGender={setGender} />
        <Text
          fontSize="xs"
          mt={2}
          textAlign="center"
          color="primary.800"
          opacity="0.6"
        >
          {`Select your baby's gender to get started!`}
        </Text>
      </Stack>

      <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
        {/* <Image src={koala} size="100%" rounded="1rem" shadow="2xl" /> */}
        <Koala
          isCursorActive={isCursorActive}
          setCursorActive={setCursorActive}
        />
      </Box>
    </Flex>
  );
}

export default Hero;
