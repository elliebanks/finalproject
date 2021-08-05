import * as React from 'react';
import {
	BrowserRouter,
	Switch,
	Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import RecipeSearch from './pages/RecipeSearch';
import Footer from './components/Footer';


/* FONT AWESOME IMPORTS */
import { library } from '@fortawesome/fontawesome-svg-core'; // import fa library
import { fab } from '@fortawesome/free-brands-svg-icons'; // import fa brand icons
import { fas } from '@fortawesome/free-solid-svg-icons'; // import fa solid icons

/* COMPONENT IMPORTS */




library.add(fab, fas); // call fa library function and include svg packages.

/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {
	
	return (
		<BrowserRouter>
			<Navbar  />

			<Switch>
				<Route exact path="/about" component={About}/>
			</Switch>	
			<Switch>
				<Route exact path="/recipes" component={RecipeSearch}/>
			</Switch>	
			

			<Footer />	
		</BrowserRouter>
	);
};

interface AppProps {}

export default App;
