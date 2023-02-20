import './AdiPilotComponent.css';

function AdiPilotComponent() {
	return (
		<div className='adiPilot'>
			<div className='pilot'>
				<div className='pilotDiv'>
					<img
						src='./images/adi/adiPilot.png'
						className='pilotImg'
						alt='pilot'
					/>
					<img
						src='./images/adi/propelor.png'
						className='propelor'
						alt='pilot'
					/>
					<div className='pilotImg pilotDriverImg' alt='pilot'></div>
				</div>
				<div className='rope'></div>
			</div>
			<div className='title pilotTitle'>
				<h2>Welcome</h2>
			</div>
		</div>
	);
}

export default AdiPilotComponent;
