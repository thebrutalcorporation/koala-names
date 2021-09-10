import React from "react";
import { useState } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Characteristics from "./Characteristics";
import Header from "./Header";
import Analyzer from "./Analyzer";
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
    <Router>
      <Header reset={reset} />
      <Switch>
        <Route path="/analyze">
          <Analyzer gender={gender} characteristics={characteristics} />
        </Route>
        <Route path="/result">
          <Result gender={gender} characteristics={characteristics} />
        </Route>
        <Route path="/">
          <Characteristics
            limit={limit}
            setLimit={setLimit}
            gender={gender}
            setGender={setGender}
            characteristics={characteristics}
            setCharacteristics={setCharacteristics}
          />
        </Route>
      </Switch>
    </Router>
  );
};

render(<App />, document.getElementById("root"));
