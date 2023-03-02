import { useContext, useRef } from 'react';
import PortfolioContext from '../../../Context/PortfolioContext';
import './level2.css';
import Mountains from './mountains/Mountains';
import Palms from './palms/Palms';
import BirdsGraph from './birdsGraph/BirdsGraph';
import AdiTractor from '../level3/adiTractor/AdiTractor';
import RibbonTitle from '../../ribbonTitle/RibbonTitle';
import SectionTitle from '../../sectionTitle/SectionTitle';
import { isMobile } from 'react-device-detect';

function Level2() {
	const { walkingDirection, currentLevel } = useContext(PortfolioContext);

	const moveMountains = useRef(isMobile ? 130 : 100);
	const movePalms = useRef(isMobile ? 260 : 180);
	const moveBirds = useRef(isMobile ? 390 : 250);
	const cloudX = useRef(12);
	const cloudY = useRef(4);
	const cloudS = useRef(isMobile ? 60 : 50);
	const aboveGround = useRef(0);

	walkingDirection < 0
		? (aboveGround.current += 0.06)
		: (aboveGround.current -= 0.06);
	if (currentLevel === 8) {
		walkingDirection < 0 ? (cloudY.current -= 0.8) : (cloudY.current += 0.8);
		walkingDirection < 0 ? (cloudS.current -= 1) : (cloudS.current += 1);
	} else if (currentLevel === 4) {
		cloudY.current = -40;
	} else if (currentLevel === 9) {
	} else {
		cloudY.current = 4;
		walkingDirection < 0
			? (cloudX.current -= 0.055)
			: (cloudX.current += 0.055);
	}

	walkingDirection < 0
		? (moveMountains.current -= 0.12)
		: (moveMountains.current += 0.12);
	walkingDirection < 0
		? (movePalms.current -= 0.12)
		: (movePalms.current += 0.12);
	walkingDirection < 0
		? (moveBirds.current -= 0.12)
		: (moveBirds.current += 0.12);

	return (
		<div className='level2'>
			{currentLevel === 2 && (
				<>
					<SectionTitle sTitle={'ABOUT'} />

					<div className='bg-images '>
						<div></div>
						<div className='ground'></div>

						<div
							className='aboveGround'
							style={{ backgroundPosition: aboveGround.current + 'vw bottom' }}
						></div>
					</div>

					<div className='ghDiv'>
						<RibbonTitle rTitle={'Lives in Givat-Haim'} />
						<img className='ghm' src='./images/ghm.png' alt='ghm' />
						<img className='ghm gha' src='./images/gha.png' alt='gha' />
						<div className='arrowSign'>
							<div>SKILLS</div>
						</div>
					</div>
					<div
						className='mountainsWrap'
						style={{ left: moveMountains.current + 'vw' }}
					>
						<Mountains />
					</div>
					<div className='palmsWrap' style={{ left: movePalms.current + 'vw' }}>
						<Palms />
					</div>
					<div
						className='birdsGraphWrap'
						style={{ left: moveBirds.current + 'vw' }}
					>
						<BirdsGraph />
					</div>
				</>
			)}
			<div>
				{currentLevel >= 2 && currentLevel < 9 && (
					<div>
						{(currentLevel < 5 || currentLevel === 8) && (
							<img className='sun2' src='./images/sun.png' alt='sun' />
						)}
						<div
							className='clouds'
							style={{
								left: cloudX.current + 'vw',
								top: cloudY.current + 'vh',
								width: cloudS.current + 'vW',
							}}
						>
							<img
								src='./images/cloud.png'
								alt='cloud'
								className='cloud cloud1'
							/>
							<img
								src='./images/cloud.png'
								alt='cloud'
								className='cloud cloud2'
							/>
							<img
								src='./images/cloud.png'
								alt='cloud'
								className='cloud cloud3'
							/>
						</div>
					</div>
				)}
				{(currentLevel === 2 || currentLevel === 3) && (
					<div className='harTavor'>
						{' '}
						<div className='arrowSign'>
							<div>WORK EXPERIENCE</div>
						</div>
						<img src='./images/har2.png' alt='Har Tavor' className='' />
					</div>
				)}
				{currentLevel < 3 && <AdiTractor />}
			</div>
		</div>
	);
}

export default Level2;
