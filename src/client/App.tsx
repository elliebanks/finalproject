import * as React from 'react';
import {
	BrowserRouter,
	Switch,
	Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";

/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {
	return (
		<BrowserRouter>
			<Navbar />

			<Switch>
				<Route exact path="/about" component={About}/>
			</Switch>	
		</BrowserRouter>
	);
};

interface AppProps {}

export default App;
