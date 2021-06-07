import Table from './Table/table2';
import Login from './Login/Layout';
import Fish from './fish/rubish';
import Graph from './Graph/Graph';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/data">
					<Graph />
				</Route>
				<Route exact path="/">
					<Login />
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
