import { useEffect, useState } from 'react';

function AdiImage({ stoppedWalking = true, walkingDirection, goDown }) {
	const [adiPic, setAdiPic] = useState('');

	useEffect(() => {
		if (goDown) {
			setAdiPic('adi-parachute.png');
		} else {
			setAdiPic('adi-stand4.png');
			stoppedWalking === true && !goDown
				? setAdiPic('adi-stand4.png')
				: setAdiPic('adi-walk2.gif');
		}
	}, [goDown, stoppedWalking]);

	return (
		<div
			className={`adiImageDiv ${goDown ? 'goDownPic' : 'notGoDown'} ${
				stoppedWalking ? 'standing' : 'walking'
			}`}
		>
			<img
				src={`/images/adi/${adiPic}`}
				alt='adi'
				className={walkingDirection < 0 ? 'backword' : ''}
			/>
		</div>
	);
}

export default AdiImage;
