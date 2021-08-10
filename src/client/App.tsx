import * as React from 'react';
import {
	BrowserRouter,
	Switch,
	Route
} from "react-router-dom";

/* COMPONENT IMPORTS */
import Navbar from "./components/Navbar";


/* PAGE IMPORTS */
import Home from "./pages/Home";
import About from "./pages/About";
import RecipeSearch from './pages/RecipeSearch';
import SearchResults from './pages/SearchResults';

import Footer from './components/Footer';

/* FONT AWESOME IMPORTS */
import { library } from '@fortawesome/fontawesome-svg-core'; // import fa library
import { fab } from '@fortawesome/free-brands-svg-icons'; // import fa brand icons
import { fas } from '@fortawesome/free-solid-svg-icons'; // import fa solid icons
import Contact from './pages/Contact';
import SingleRecipe from './pages/Recipe';
import SubmitForm from './pages/Submit';

library.add(fab, fas); // call fa library function and include svg packages.

/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {
	
	return (
		<BrowserRouter>
			<Navbar  />

			<Switch>
				<Route exact path ="/" component={Home} />

				<Route exact path="/about" component={About}/>
			
				<Route exact path="/recipes" component={RecipeSearch}/>
				
				<Route exact path="/recipes/:id">
					<SingleRecipe/>
				</Route>

				<Route exact path="/submit">
					<SubmitForm />
				</Route>

				<Route exact path="/results/:searchBy/:text" component={SearchResults}/>
				
				<Route exact path="/contact" component={Contact} />
			</Switch>	
			

			<Footer />	
		</BrowserRouter>
	);
};

interface AppProps {}

export default App;
