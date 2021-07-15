import Table from "./Table/Form";
import Login from "./Login/Layout";
import Fish from "./fish/rubish";
import Graph from "./Graph/Accuile";
import Production from "./Graph/Graph3";
import Contact from "./Contact/Contact";
import Espace from "./Espace/Espace";
import Map from "./Map/Layer";
import Plan from "./plan/plan";
import Credit from "./credits/credits";
import Poission from "./poisson/Poission";
import Crustacés from "./poisson/Crustacés";
import Céphalopodes from "./poisson/Céphalopodes";
import Sardine from "./poisson/detail/Poisson/Sardine";
import Allache from "./poisson/detail/Poisson/Allache";
import Anchois from "./poisson/detail/Poisson/Anchois";
import Espadon from "./poisson/detail/Poisson/Espadon";
import Dorade from "./poisson/detail/Poisson/Dorade";
import Saurle from "./poisson/detail/Poisson/Saurle";
import Pageot from "./poisson/detail/Poisson/Pageot";
import Rouget from "./poisson/detail/Poisson/Rouget";
import Crouge from "./poisson/detail/Crustacés/Crouvette_rouge";
import Cblanch from "./poisson/detail/Crustacés/Crouvette_blanche";
import Calamr from "./poisson/detail/Céphalopodes/Calamr";
import Sepia from "./poisson/detail/Céphalopodes/Sepia";
import Poulpe from "./poisson/detail/Céphalopodes/Poulpe";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Try from './try/Try';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/data">
          <Graph />
        </Route>
        <Route exact path="/data/production">
          <Production />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/map">
          <Map />
        </Route>
        <Route path="/user">
          <Table />
        </Route>
        <Route exact path="/fish">
          <Fish />
        </Route>
        <Route exact path="/credits">
          <Credit />
        </Route>
        <Route exact path="/espace">
          <Espace />
        </Route>
        <Route exact path="/espace/poission">
          <Poission />
        </Route>
        <Route exact path="/espace/crustacés">
          <Crustacés />
        </Route>{" "}
        <Route exact path="/espace/Céphalopodes">
          <Céphalopodes />
        </Route>
        <Route exact path="/espace/poission/Sardine">
          <Sardine />
        </Route>
        <Route exact path="/espace/poission/Allache">
          <Allache />
        </Route>
        <Route exact path="/espace/poission/Anchois">
          <Anchois />
        </Route>
        <Route exact path="/espace/poission/Espadon">
          <Espadon />
        </Route>
        <Route exact path="/espace/poission/Dorade">
          <Dorade />
        </Route>
        <Route exact path="/espace/poission/Saurle">
          <Saurle />
        </Route>
        <Route exact path="/espace/poission/Pageot">
          <Pageot />
        </Route>
        <Route exact path="/espace/poission/Rouget">
          <Rouget />
        </Route>{" "}
        <Route exact path="/espace/Crustacés/Crevette_rouge">
          <Crouge />{" "}
        </Route>
        <Route exact path="/espace/Crustacés/Crevette_blanche">
          <Cblanch />{" "}
        </Route>
        <Route exact path="/espace/Céphalopodes/calmar">
          <Calamr />{" "}
        </Route>
        <Route exact path="/espace/Céphalopodes/poulpe">
          <Poulpe />{" "}
        </Route>
        <Route exact path="/espace/Céphalopodes/sepia">
          <Sepia />{" "}
        </Route>
        <Route exact path="/espace/Crustacés/Crevette_blanche">
          <Cblanch />{" "}
        </Route>
        <Route exact path="/plan">
          <Plan />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
