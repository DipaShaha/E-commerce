import React from "react";
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import "./index.scss";
import App from "./App";
import {ProductProvider} from './Context';

ReactDOM.render(
	<ProductProvider>
		<Router>
			<App />
		</Router>
	</ProductProvider>,
	document.getElementById("root")
	);
