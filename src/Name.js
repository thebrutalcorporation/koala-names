import React from "react";
import { Badge, Box, Flex, Center } from "@chakra-ui/react";

const Label = ({ children }) => (
  <Box
    color="gray.500"
    fontWeight="semibold"
    letterSpacing="wide"
    fontSize="xs"
    textTransform="uppercase"
    mr="2"
    as="span"
  >
    {children}
  </Box>
);

function Name({ option }) {
  return (
    <Box p={4}>
      <Flex width="full">
        <Center width={120} p={10} borderRadius="lg" borderWidth="1px">
          {option.name}
        </Center>
        <Flex flexDirection="column" ml={4}>
          <Box>
            <Label>meaning</Label>
            {option.meaning}
          </Box>
          <Box>
            <Label>origin</Label>
            {option.origin}
          </Box>
          <Box>
            <Label>popularity</Label>
            <Badge
              ml="1"
              colorScheme={option.popularity === "high" ? "yellow" : "blue"}
            >
              {option.popularity}
            </Badge>
          </Box>
          <Box>
            <Label>celebrities</Label>
            {option.celebrities.map((celebrity) => (
              <Box mr="2" as="span" fontSize="sm">
                {celebrity},
              </Box>
            ))}
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Name;
