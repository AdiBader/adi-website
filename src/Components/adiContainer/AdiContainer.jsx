import AdiImage from './AdiImage';
import AdiHab from '../levels/level8/adiHab/AdiHab';
import { useContext, useState, useEffect, useRef } from 'react';
import PortfolioContext from '../../Context/PortfolioContext';
// import ReactScrollWheelHandler from 'react-scroll-wheel-handler';

import AdiTractor from '../levels/level3/adiTractor/AdiTractor';

function AdiContainer() {
	const {
		handleOnWheel,
		goDown,
		currentLevel,
		walkingDirection,
		newSliderIndex,
	} = useContext(PortfolioContext);
	const [stopped, setStopped] = useState();
	console.log(currentLevel);

	const ref = useRef(null);

	useEffect(() => {
		ref.current.focus();
	}, [currentLevel]);

	const onScrollStop = (callback) => {
		if (currentLevel >= 2 && currentLevel !== 5 && currentLevel < 8) {
			let isScrolling;
			setStopped(false);
			const delta = currentLevel === 2 || currentLevel === 7 ? 700 : 350;

			window.addEventListener(
				'wheel',
				(e) => {
					clearTimeout(isScrolling);
					isScrolling = setTimeout(() => {
						callback();
					}, delta);
				},
				false
			);
		}
	};

	const onKeyScrollStop = (callback) => {
		if (currentLevel >= 2 && currentLevel !== 5 && currentLevel < 8) {
			let isScrolling;
			setStopped(false);
			const delta = currentLevel === 2 || currentLevel === 7 ? 600 : 400;

			window.addEventListener(
				'keydown',
				(e) => {
					clearTimeout(isScrolling);
					isScrolling = setTimeout(() => {
						callback();
					}, delta);
				},
				false
			);
		}
	};

	function handleKeyDown(e) {
		if (!goDown) {
			if (e.key === 'ArrowDown') {
				handleOnWheel(100);
				currentLevel >= 2 && onKeyScrollStop(() => setStopped(true));
			} else if (e.key === 'ArrowUp') {
				handleOnWheel(-100);
				currentLevel >= 2 && onKeyScrollStop(() => setStopped(true));
			} else if (e.key === 'ArrowLeft') {
				if (currentLevel >= 2 && currentLevel < 8) {
					handleOnWheel(-100);
					onKeyScrollStop(() => setStopped(true));
				}
			} else if (e.key === 'ArrowRight') {
				if (currentLevel >= 2 && currentLevel < 8) {
					handleOnWheel(100);
					onKeyScrollStop(() => setStopped(true));
				}
			}
		}
	}

	return (
		<div
			className='adiContainerDiv'
			ref={ref}
			onWheel={(evt) => {
				if (!goDown) {
					handleOnWheel(evt.deltaY);
					currentLevel >= 2 && onScrollStop(() => setStopped(true));
				}
			}}
			onKeyDown={handleKeyDown}
			tabIndex={0}
		>
			{(goDown || currentLevel === 2 || currentLevel === 7) && (
				<AdiImage
					stoppedWalking={stopped}
					walkingDirection={walkingDirection}
					goDown={goDown}
				/>
			)}
			{currentLevel >= 3 && currentLevel < 7 && (
				<AdiTractor
					stoppedWalking={stopped}
					walkingDirection={walkingDirection}
					currentLevel={currentLevel}
					newSliderIndex={newSliderIndex}
				/>
			)}
			{currentLevel >= 8 && <AdiHab />}
		</div>
	);
}

export default AdiContainer;
