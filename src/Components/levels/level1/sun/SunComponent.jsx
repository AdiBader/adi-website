import './sunComponent.css';
import SunSticksComponent from './SunSticksComponent';

function SunComponent() {
	return (
		<div>
			<img className='sun' src='./images/sun.png' alt='sun' />

			<div className='sunSticks'>
				<SunSticksComponent />
			</div>
			<div className='sunSticks sunSticks2'>
				<SunSticksComponent />
			</div>
		</div>
	);
}

export default SunComponent;
