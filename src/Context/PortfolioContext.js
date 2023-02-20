import { createContext, useState } from 'react';

const PortfolioContext = createContext();

const node0x = 0;
const node0y = 0;
const level1StoppingPoint = -180;
const node12y = -400;
const node2x = -275;

const mountainBottom = -340;
const pixelYConst = -60;

const mountainTop = 35;
const mountainTopX = -310;
const node3X = -370;
const node4x = -430;
const node4Slider = -480;
const node5x = -550;
const node6x = -555;
const node7x = -620;
const node8x = -700;

const node9y = -100;

const deltaScroll = 5;
const deltaScrollh = 5;

export const PortfolioProvider = ({ children }) => {
	const [pageXposition, setPageXposition] = useState(0);
	const [pageYposition, setPageYposition] = useState(0);
	const [currentLevel, setCurrentLevel] = useState(0);
	const [walkingDirection, setWalkingDirection] = useState(100);
	const [goDown, setGoDown] = useState(false);
	const [mountainY, setMountainY] = useState(0);
	const [pixelY, setPixelY] = useState(0);
	const [reachedMountainTop, setReachedMountainTop] = useState(false);
	const [noTransition, setNoTransition] = useState(false);

	const [newSliderIndex, setNewSliderIndex] = useState(0);

	function handleOnWheel(evt) {
		setWalkingDirection(evt);
		if (pageYposition === node0y && pageXposition === node0x) {
			// Starting Point = node0
			if (walkingDirection > 0) {
				setPageYposition(pageYposition - 80);
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
			setPixelY(0);
			// What happens at node mountain top
			if (walkingDirection < 0) {
				setPageXposition(pageXposition + deltaScrollh);
				setMountainY(mountainY - deltaScrollh);
				setReachedMountainTop(false);
			} else if (walkingDirection > 0) {
				setPageXposition(pageXposition - deltaScrollh);
				setMountainY(mountainY - deltaScrollh);
				setReachedMountainTop(true);
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
				setPixelY(0);
			} else if (walkingDirection > 0) {
				setPageXposition(pageXposition - deltaScrollh);
				setPageYposition(node12y);
				setPixelY(pixelYConst);
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
				setPixelY(0);
				setCurrentLevel(9);
			}
		}
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
		setPixelY(0);
		setNoTransition(true);
		noTransFunc();
	}
	function goToAbout() {
		setPageXposition(node0x);
		setPageYposition(node12y);
		setCurrentLevel(2);
		setNoTransition(true);
		setPixelY(0);
		noTransFunc();
	}
	function goToExp() {
		setPageXposition(node4Slider);
		setPageYposition(node12y);
		setPixelY(pixelYConst);
		setCurrentLevel(4);
		setNewSliderIndex(0);
		setNoTransition(true);
		noTransFunc();
	}
	function goToEdu() {
		setPageXposition(node8x);
		setPageYposition(node12y + deltaScroll);
		setPixelY(pixelYConst);
		setCurrentLevel(8);
		setNoTransition(true);
		noTransFunc();
	}
	function goToContact() {
		setPageXposition(node8x);
		setPageYposition(node9y);
		setPixelY(0);
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
				pixelY,
				reachedMountainTop,
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
