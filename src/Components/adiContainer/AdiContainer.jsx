import AdiImage from './AdiImage';
import AdiHab from '../levels/level8/adiHab/AdiHab';
import {
	useContext,
	useState,
	useEffect,
	useRef,
	useLayoutEffect,
} from 'react';
import PortfolioContext from '../../Context/PortfolioContext';
// import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
// import { useSwipeable } from 'react-swipeable';

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

	// Detect swipe
	const [touchStart, setTouchStart] = useState({});
	const [touchEnd, setTouchEnd] = useState({});

	// the required distance between touchStart and touchEnd to be detected as a swipe
	const minSwipeDistanceX = 4;
	const minSwipeDistanceY = 4;

	const onTouchStart = (e) => {
		setTouchEnd({}); // otherwise the swipe is fired even with usual touch events
		setTouchStart({
			x: e.targetTouches[0].clientX,
			y: e.targetTouches[0].clientY,
		});
		setStopped(false);
	};

	const onTouchMove = (e) => {
		setTouchEnd({
			x: e.targetTouches[0].clientX,
			y: e.targetTouches[0].clientY,
		});
		checkAndFire();
		setTouchStart(touchEnd);
	};
	function checkAndFire() {
		if (!goDown) {
			if (!touchStart.x || !touchEnd.x) return;
			const distanceX = touchStart.x - touchEnd.x;

			const distanceY = touchStart.y - touchEnd.y;

			if (
				Math.abs(distanceX) > Math.abs(distanceY) &&
				Math.abs(distanceX) > minSwipeDistanceX
			) {
				if (distanceX > minSwipeDistanceX) {
					// If swipe left
					handleOnWheel(100);
				} else if (distanceX < -minSwipeDistanceX) {
					// If swipe right
					handleOnWheel(-100);
				}
			} else if (
				Math.abs(distanceY) > Math.abs(distanceX) &&
				Math.abs(distanceY) > minSwipeDistanceY
			) {
				if (distanceY > minSwipeDistanceY) {
					// If swipe down
					handleOnWheel(100);
				} else if (distanceY < -minSwipeDistanceY) {
					// If swipe up
					handleOnWheel(-100);
				}
			}
		}
	}

	const onTouchEnd = () => {
		setTouchEnd({}); // otherwise the swipe is fired even with usual touch events
		setTouchStart({});
		setStopped(true);
	};

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
		<div
			style={{ height: `${window.innerHeight}px` }}
			className='adiContainerDiv'
			onTouchStart={onTouchStart}
			onTouchMove={onTouchMove}
			onTouchEnd={onTouchEnd}
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
