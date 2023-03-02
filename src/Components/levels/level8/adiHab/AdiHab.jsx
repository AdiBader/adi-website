import React from 'react';
import './adiHab.css';
import ChangingPic from '../../../ChangingPic';

const habPic1 = './images/switching/adiDriveHab1.png';
const habPic2 = './images/switching/adiDriveHab2.png';

function AdiHab() {
	return (
		<div className='habDiv'>
			<img src='./images/hab.png' alt='' className='hab' />
			<div className='adiDriveHab'>
				<ChangingPic pic1={habPic1} pic2={habPic2} time={1750} title={'Adi'} />
			</div>
		</div>
	);
}

export default AdiHab;
