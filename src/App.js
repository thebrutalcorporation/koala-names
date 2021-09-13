import React, { useState, StrictMode, lazy, Suspense } from "react";
import { ChakraProvider, Spinner } from "@chakra-ui/react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Characteristics from "./Characteristics";
import Layout from "./Layout";
import Hero from "./Hero";

const Analyzer = lazy(() => import("./Analyzer"));
const About = lazy(() => import("./About"));
const Result = lazy(() => import("./Result"));

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
      <Suspense fallback={<Spinner />}>
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
      </Suspense>
    </ChakraProvider>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
