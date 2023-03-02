import Tractor from './../../../../tractor.png';
import './adiTractor.css';
import { useEffect, useState } from 'react';
import ChangingPic from '../../../ChangingPic';

function AdiTractor({
	stoppedWalking = true,
	walkingDirection,
	currentLevel,
	newSliderIndex,
}) {
	const [moveToIndex, setMoveToIndex] = useState(false);

	useEffect(() => {
		setMoveToIndex(true);
		setTimeout(() => {
			setMoveToIndex(false);
		}, 1000);
	}, [newSliderIndex]);

	return (
		<div
			className={`tractorDiv ${
				currentLevel === 2 && 'not3'
			} tractorLevel${currentLevel} ${currentLevel === 2 && 'not3'} ${
				moveToIndex && currentLevel === 4 ? 'moveToIndex' : ''
			} ${currentLevel === 4 && 'tractorIndex' + newSliderIndex}`}
		>
			<div
				className={`inTractorDiv ${
					!stoppedWalking && currentLevel !== 4 && 'driving'
				} ${walkingDirection < 0 && currentLevel !== 4 && 'backword'}`}
			>
				<img src={Tractor} alt='Tractor' className='tractor' />
				<img src='./images/Twheel.png' alt='Wheel' className='tWheel' />
				<img src='./images/Twheel.png' alt='Wheel' className='tWheel small' />
				{currentLevel > 2 && currentLevel < 7 && (
					<div className='adiDriveT'>
						<ChangingPic
							pic1={'./images/switching/adiDriveTfront.png'}
							pic2={'./images/switching/adiDriveTside.png'}
							time={1750}
							title={'Adi'}
						/>
					</div>
				)}
			</div>
		</div>
	);
}

export default AdiTractor;
