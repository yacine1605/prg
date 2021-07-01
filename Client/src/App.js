import Table from './Table/Form';
import Login from './Login/Layout';
import Fish from './fish/rubish';
import Graph from './Graph/Accuile';
import Production from './Graph/Graph3';
//import Accuile from './Accuile/Accuile';
import Contact from './Contact/Contact';
import Map from './Map/Layer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
			</Switch>
		</Router>
	);
};

export default App;
