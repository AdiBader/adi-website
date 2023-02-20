import './adiParatrooper.css';
import { useState, useContext } from 'react';
import PortfolioContext from '../../../../Context/PortfolioContext';

function AdiParatrooper() {
	const [paratrooperClicked, setParatrooperClicked] = useState(false);
	const { moveToLevel2 } = useContext(PortfolioContext);

	function paratrooper() {
		moveToLevel2();
		setParatrooperClicked(true);
	}

	return (
		<div
			className={`adiParatrooper animateParatrooper ${
				paratrooperClicked ? 'paratrooperClicked' : ''
			}`}
		>
			<div className='pilot'>
				<div className='pilotDiv'>
					<img
						src='./images/adi/adiPilot.png'
						className='pilotImg'
						alt='pilot'
					/>
					<img
						src='./images/adi/propelor.png'
						className='propelor'
						alt='pilot'
					/>
					<div className='pilotImg pilotDriverImg' alt='pilot'></div>
				</div>
				<div className='rope'></div>
			</div>
			<div className='title pilotTitle' onClick={() => paratrooper()}>
				<h2>CLICK HERE!</h2>
			</div>
		</div>
	);
}

export default AdiParatrooper;
