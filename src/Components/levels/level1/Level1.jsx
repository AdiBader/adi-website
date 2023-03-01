import { useContext, useRef } from 'react';
import PortfolioContext from '../../../Context/PortfolioContext';
import './level1.css';
import SunComponent from './sun/SunComponent';
import BirdsComponent from './birds/BirdsComponent';
import AdiPilotComponent from '../level1/adiPilotComponent/AdiPilotComponent';
import Text1Component from './Text1Component';
import AdiParatrooper from './adiParatrooper/AdiParatrooper';
import { isMobile } from 'react-device-detect';

function Level1() {
	const { currentLevel, pageYposition } = useContext(PortfolioContext);

	const anim = useRef('');
	currentLevel === 1 ? (anim.current = 'anim') : (anim.current = '');

	const animateParatrooper = useRef(false);
	const animatePilot = useRef(false);

	if (isMobile) {
		animatePilot.current = pageYposition <= -60 && true;
		animateParatrooper.current = pageYposition <= -130 && true;
	} else if (!isMobile) {
		animatePilot.current = pageYposition <= -100 && true;
		animateParatrooper.current = pageYposition <= -180 && true;
	}
	return (
		<div className='level1'>
			<div className={'bg-images ' + anim.current}>
				<img
					src='./images/corner-cloud.png'
					alt='title'
					className='cornerCloud'
				/>
				<img src='./images/top-cloud.png' alt='title' className='topCloud' />
				<img src='./images/adi-title.png' alt='title' className='adiTitle' />
				<img className='cloudRight' src='./images/cloud-r.png' alt='cloud' />
				<img className='cloudLeft' src='./images/cloud-l2.png' alt='cloud' />
				<SunComponent />
				<div className='birds'>
					<BirdsComponent />
				</div>
				{animatePilot.current && <AdiPilotComponent />}

				<Text1Component />
				{animateParatrooper.current && <AdiParatrooper />}
				<img src='./images/cloud.png' alt='' className='cloudFall' />
			</div>
		</div>
	);
}

export default Level1;

// {animateParatrooper.current === true && <AdiParatrooper />}
