import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "./Header";

function Layout({ reset, children }, ...rest) {
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
      pl="10"
      pr="10"
      {...rest}
    >
      <Header reset={reset} />
      <main>{children}</main>
    </Flex>
  );
}

export default Layout;
