import './App.css';
import React, { useLayoutEffect, useState, useEffect } from 'react';

import MainComponent from './Components/MainComponent';

import { PortfolioProvider } from './Context/PortfolioContext';

function App() {
	function useLockBodyScroll() {
		useLayoutEffect(() => {
			// Get original body overflow
			const originalStyle = window.getComputedStyle(document.body).overflow;
			// Prevent scrolling on mount
			document.body.style.overflow = 'hidden';
			// Re-enable scrolling when component unmounts
			return () => (document.body.style.overflow = originalStyle);
		}, []); // Empty array ensures effect is only run on mount and unmount
	}
	useLockBodyScroll();
	return (
		<React.StrictMode>
			<PortfolioProvider>
				<MainComponent />
			</PortfolioProvider>
		</React.StrictMode>
	);
}

export default App;
