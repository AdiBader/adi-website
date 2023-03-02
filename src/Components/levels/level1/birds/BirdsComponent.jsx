import './birdsComponent.css';
import ChangingPic from '../../../ChangingPic';

const birdsArray = Array.from({ length: 5 }, (_, i) => i + 1);
const birdPic1 = './images/switching/bird.png';
const birdPic2 = './images/switching/bird-fly.png';

function BirdsComponent() {
	return (
		<div>
			{birdsArray.map((el, i) => (
				<div className={'bird bird' + el} key={i}>
					<ChangingPic
						pic1={birdPic1}
						pic2={birdPic2}
						time={250}
						title={'bird'}
					/>
				</div>
			))}
		</div>
	);
}

export default BirdsComponent;
