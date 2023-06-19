import './wchComponent.css';
import RibbonTitle from '../../../ribbonTitle/RibbonTitle';

function WchComponent() {
	return (
		<div className='wchDiv'>
			<RibbonTitle rTitle={'Recent Project'} />
			<div className='wchDivIn'>
				<a
					href='https://pub-ghm.netlify.app/'
					target='_blank'
					title='Link to WCH app'
					rel='noreferrer'
				>
					<div className='wchTxt'>
						<h3>Working Class Heroes App</h3>
						<p>
							A music app i made for a pub. This app can play all the live music
							recordings that was made in the pub. The app is reading Json files
							that are storing information from shared Dropbox folders that
							contains all the music files.
						</p>
					</div>
					<div className='wchPic'>
						<img src='./images/wchPic.png' alt='Working Class Heroes App' />
					</div>
				</a>
			</div>
		</div>
	);
}

export default WchComponent;
