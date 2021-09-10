import React from "react";
import { Box, Text } from "@chakra-ui/react";

function Logo(props) {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        Koala Names
      </Text>
    </Box>
  );
}

export default Logo;
