import './App.css';
import React from 'react';

import MainComponent from './Components/MainComponent';

import { PortfolioProvider } from './Context/PortfolioContext';

function App() {
	return (
		<React.StrictMode>
			<PortfolioProvider>
				<MainComponent />
			</PortfolioProvider>
		</React.StrictMode>
	);
}

export default App;
