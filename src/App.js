import React from "react";
import PaymentForm from "./PaymentForm";
import PaidTab from "./PaidTab";
import NotPaidTab from "./NotPaidTab.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {



  return (
    <Router>
      <Switch>
      <Route exact path="/">
          <NotPaidTab />
        </Route>

        <Route exact path="/paid">
          <PaidTab />
        </Route>

        <Route exact path="/pay">
          <PaymentForm/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
