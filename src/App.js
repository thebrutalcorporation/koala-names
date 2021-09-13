import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Characteristics from "./Characteristics";
import Layout from "./Layout";
import Analyzer from "./Analyzer";
import About from "./About";
import Hero from "./Hero";
import Result from "./Result";

const App = () => {
  const [gender, setGender] = useState("");
  const [characteristics, setCharacteristics] = useState([]);
  const [limit, setLimit] = useState(false);

  const reset = () => {
    setGender("");
    setCharacteristics([]);
    setLimit(false);
  };

  return (
    <ChakraProvider>
      <Router>
        <Layout reset={reset}>
          <Switch>
            <Route path="/analyze">
              <Analyzer gender={gender} characteristics={characteristics} />
            </Route>
            <Route path="/result">
              <Result gender={gender} characteristics={characteristics} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/selection">
              <Characteristics
                limit={limit}
                setLimit={setLimit}
                gender={gender}
                setGender={setGender}
                characteristics={characteristics}
                setCharacteristics={setCharacteristics}
              />
            </Route>
            <Route path="/">
              <Hero
                setGender={setGender}
                title="Don't give your kid stupid names"
                subtitle="Let our expert laoweis choose one so your kid doesn't get bullied!"
              />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ChakraProvider>
  );
};

render(<App />, document.getElementById("root"));
