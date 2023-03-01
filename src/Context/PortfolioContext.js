import { createContext, useState } from 'react';
import { isMobile } from 'react-device-detect';

const PortfolioContext = createContext();

const node0x = 0;
const node0y = 0;
const level1StoppingPoint = isMobile ? -170 : -180;
const node12y = -400;

const mountainWidth = isMobile ? 120 : 80;

const node2x = isMobile ? -515 : -275;
const mountainTop = mountainWidth / 2 - 5;
const mountainTopX = node2x - mountainWidth / 2;
const mountainBottom = node2x - mountainWidth + 10;

const node3X = isMobile ? -670 : -370;
const node4x = isMobile ? -720 : -430;
const node4Slider = isMobile ? -770 : -480;
const node5x = isMobile ? -855 : -550;
const node6x = isMobile ? -860 : -555;
const node7x = isMobile ? -950 : -620;
const node8x = isMobile ? -1050 : -700;

const node9y = -100;

// const isMobile = false;
const deltaScroll = isMobile ? 2.5 : 10;
const deltaScrollh = isMobile ? 5 : 5;

export const PortfolioProvider = ({ children }) => {
	const [pageXposition, setPageXposition] = useState(0);
	const [pageYposition, setPageYposition] = useState(0);
	const [currentLevel, setCurrentLevel] = useState(0);
	const [walkingDirection, setWalkingDirection] = useState(100);
	const [goDown, setGoDown] = useState(false);
	const [mountainY, setMountainY] = useState(0);

	const [noTransition, setNoTransition] = useState(false);

	const [newSliderIndex, setNewSliderIndex] = useState(0);

	function handleOnWheel(evt) {
		setWalkingDirection(evt);
		if (pageYposition === node0y && pageXposition === node0x) {
			// Starting Point = node0
			if (walkingDirection > 0) {
				setPageYposition(pageYposition - deltaScroll);
				setCurrentLevel(1);
			} else if (walkingDirection < 0) {
				setCurrentLevel(0);
			}
		} else if (
			pageYposition < node0y &&
			pageYposition > level1StoppingPoint &&
			pageXposition === node0x
		) {
			// node0 - node1
			walkingDirection > 0
				? setPageYposition(pageYposition - deltaScroll)
				: setPageYposition(pageYposition + deltaScroll);
		} else if (
			pageYposition === level1StoppingPoint &&
			pageXposition === node0x
		) {
			// What happens at level1StoppingPoint
			if (walkingDirection < 0) {
				setPageYposition(pageYposition + deltaScroll);
			} else {
			}
		} else if (pageYposition === node12y && pageXposition === node0x) {
			// What happens at node1
			setGoDown(false);

			if (walkingDirection > 0) {
				setPageXposition(pageXposition - deltaScrollh);
			}
		} else if (
			pageYposition === node12y &&
			pageXposition < 0 &&
			pageXposition > node2x
		) {
			// What happens between node1 - node2

			walkingDirection < 0
				? setPageXposition(pageXposition + deltaScrollh)
				: setPageXposition(pageXposition - deltaScrollh);
		} else if (pageXposition === node2x && pageYposition === node12y) {
			// What happens at node2 mountain node
			if (walkingDirection < 0) {
				setPageXposition(pageXposition + deltaScrollh);
				setMountainY(0);
			} else if (walkingDirection > 0) {
				setPageXposition(pageXposition - deltaScrollh);
				setMountainY(mountainY + deltaScrollh);
			}
		} else if (
			pageXposition < node2x &&
			mountainY < mountainTop &&
			pageXposition > mountainTopX
		) {
			// What happens between node2 mountain node and mountain top
			if (walkingDirection < 0) {
				setPageXposition(pageXposition + deltaScrollh);
				setMountainY(mountainY - deltaScrollh);
			} else if (walkingDirection > 0) {
				setPageXposition(pageXposition - deltaScrollh);
				setMountainY(mountainY + deltaScrollh);
			}
		} else if (mountainY === mountainTop) {
			// What happens at node mountain top
			if (walkingDirection < 0) {
				setPageXposition(pageXposition + deltaScrollh);
				setMountainY(mountainY - deltaScrollh);
			} else if (walkingDirection > 0) {
				setPageXposition(pageXposition - deltaScrollh);
				setMountainY(mountainY - deltaScrollh);
			}
		} else if (
			pageXposition <= mountainTopX &&
			pageXposition > mountainBottom
		) {
			// What happens between mountain top and mountainBottom
			if (walkingDirection < 0) {
				setPageXposition(pageXposition + deltaScrollh);
				setMountainY(mountainY + deltaScrollh);
			} else if (walkingDirection > 0) {
				setPageXposition(pageXposition - deltaScrollh);
				setMountainY(mountainY - deltaScrollh);
			}
		} else if (pageXposition === mountainBottom) {
			setMountainY(0);
			// What happens at mountainBottom
			if (walkingDirection < 0) {
				setPageXposition(pageXposition + deltaScrollh);
				setMountainY(mountainY + deltaScrollh);
				setPageYposition(node12y);
			} else if (walkingDirection > 0) {
				setPageXposition(pageXposition - deltaScrollh);
				setPageYposition(node12y);
			}
		} else if (pageXposition < mountainBottom && pageXposition > node3X) {
			// What happens between mountainBottom and node3
			walkingDirection < 0
				? setPageXposition(pageXposition + deltaScrollh)
				: setPageXposition(pageXposition - deltaScrollh);
		} else if (pageXposition === node3X) {
			// What happens at node3
			if (walkingDirection < 0) {
				setCurrentLevel(2);
				setPageXposition(pageXposition + deltaScrollh);
			} else if (walkingDirection > 0) {
				setCurrentLevel(3);
				setPageXposition(pageXposition - deltaScrollh);
			}
		} else if (pageXposition < node3X && pageXposition > node4x) {
			// What happens between node3 and node4x
			walkingDirection < 0
				? setPageXposition(pageXposition + deltaScrollh)
				: setPageXposition(pageXposition - deltaScrollh);
		} else if (pageXposition === node4x) {
			// What happens at node4x
			if (walkingDirection < 0) {
				setCurrentLevel(3);
				setPageXposition(pageXposition + deltaScrollh);
			} else if (walkingDirection > 0) {
				setCurrentLevel(4);
				setPageXposition(node4Slider);
			}
		} else if (pageXposition === node5x) {
			// What happens at node5x

			walkingDirection > 0 && setPageXposition(pageXposition - deltaScrollh);
		} else if (pageXposition === node6x) {
			// What happens at node6x

			if (walkingDirection > 0) {
				setCurrentLevel(6);
				setPageXposition(pageXposition - deltaScrollh);
			} else if (walkingDirection < 0) {
				goToExp();
			}
		} else if (pageXposition < node6x && pageXposition > node7x) {
			// What happens between node6x and node7x
			walkingDirection < 0
				? setPageXposition(pageXposition + deltaScrollh)
				: setPageXposition(pageXposition - deltaScrollh);
		} else if (pageXposition === node7x) {
			// What happens at node7x
			if (walkingDirection < 0) {
				setCurrentLevel(6);
				setPageXposition(pageXposition + deltaScrollh);
			} else if (walkingDirection > 0) {
				setCurrentLevel(7);
				setPageXposition(pageXposition - deltaScrollh);
			}
		} else if (pageXposition < node7x && pageXposition > node8x) {
			// What happens between node7x and node8x
			walkingDirection < 0
				? setPageXposition(pageXposition + deltaScrollh)
				: setPageXposition(pageXposition - deltaScrollh);
		} else if (pageXposition === node8x && pageYposition === node12y) {
			// What happens at node8x
			if (walkingDirection < 0) {
				setCurrentLevel(7);
				setPageXposition(pageXposition + deltaScrollh);
			} else if (walkingDirection > 0) {
				setCurrentLevel(8);
				setPageYposition(pageYposition + deltaScroll);
			}
		} else if (
			currentLevel === 8 &&
			pageXposition === node8x &&
			pageYposition >= node12y &&
			pageYposition < node9y
		) {
			// What happens between node8x and node9y
			walkingDirection < 0
				? setPageYposition(pageYposition - deltaScroll)
				: setPageYposition(pageYposition + deltaScroll);
		} else if (pageYposition === node9y) {
			// What happens at node9y
			if (walkingDirection < 0) {
				setPageYposition(pageYposition - deltaScroll);
			} else if (walkingDirection > 0) {
				setPageYposition(pageYposition);

				setCurrentLevel(9);
			}
		}

		// // Test
		// const scrollY = (window.innerHeight / 100) * 5;
		// window.scrollBy({
		// 	top: scrollY,
		// 	left: 0,
		// 	behavior: 'smooth',
		// });
		// console.log(scrollY);
	}

	function noTransFunc() {
		setTimeout(() => {
			setNoTransition(false);
		}, 1000);
	}

	function moveToLevel2() {
		setPageYposition(node12y);
		setGoDown(true);
		setTimeout(() => {
			setCurrentLevel(2);
		}, 2000);

		setTimeout(() => {
			setGoDown(false);
		}, 4000);
	}
	function goToHome() {
		setPageXposition(node0x);
		setPageYposition(node0y);
		setCurrentLevel(0);

		setNoTransition(true);
		noTransFunc();
	}
	function goToAbout() {
		setPageXposition(node0x);
		setPageYposition(node12y);
		setCurrentLevel(2);
		setNoTransition(true);

		noTransFunc();
	}
	function goToExp() {
		setPageXposition(node4Slider);
		setPageYposition(node12y);

		setCurrentLevel(4);
		setNewSliderIndex(0);
		setNoTransition(true);
		noTransFunc();
	}
	function goToEdu() {
		setPageXposition(node8x);
		setPageYposition(node12y + deltaScroll);

		setCurrentLevel(8);
		setNoTransition(true);
		noTransFunc();
	}
	function goToContact() {
		setPageXposition(node8x);
		setPageYposition(node9y);

		setCurrentLevel(9);
		setNoTransition(true);
		noTransFunc();
	}

	function sliderTractor(oldIndex, newSIndex) {
		if (oldIndex === 2) {
			closeSlider();
		}
		setNewSliderIndex(newSIndex);
	}

	function closeSlider() {
		setPageXposition(node5x);
		setWalkingDirection(100);
		setCurrentLevel(5);
	}

	// Add Portfolio

	return (
		<PortfolioContext.Provider
			value={{
				handleOnWheel,
				pageXposition,
				pageYposition,
				currentLevel,
				walkingDirection,
				moveToLevel2,
				goDown,
				mountainY,
				sliderTractor,
				newSliderIndex,
				noTransition,
				goToHome,
				goToAbout,
				goToExp,
				goToEdu,
				goToContact,
				closeSlider,
			}}
		>
			{children}
		</PortfolioContext.Provider>
	);
};

export default PortfolioContext;
