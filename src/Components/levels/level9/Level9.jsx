import { useState, useEffect } from 'react';
import ContactFormComponent from './../../ContactFormComponent';
import './level9.css';
import HeaderComponent from '../../headerComponent/HeaderComponent';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Fireworks } from '@fireworks-js/react';

function Level9({ currentLevel }) {
	const [finishFirework, setFinishFirework] = useState(false);

	useEffect(() => {
		if (currentLevel === 9) {
			setFinishFirework(false);
			setTimeout(() => {
				setFinishFirework(true);
			}, 5000);
		}
	}, [currentLevel]);

	return (
		<div
			className='level9'
			style={{
				height: `${window.innerHeight + 'px'}`,
				top: `${window.innerHeight + 'px'}`,
			}}
		>
			{currentLevel === 9 && (
				<div className='level9Div'>
					<HeaderComponent />
					<div className='contactContainer'>
						<div className='contactTextDiv'>
							<h1>CONTACT ME</h1>
							<p>
								If you like what i do.
								<br /> If you need a guy like me in your team.
								<br /> If you want to do something together.
								<br />
								<br /> Feel free to contact me.
							</p>
						</div>
						<ContactFormComponent />
					</div>
					{!finishFirework && (
						<div className='fwDiv'>
							<Fireworks
								options={{
									rocketsPoint: {
										min: 50,
										max: 50,
									},
									brightness: {
										min: 90,
										max: 100,
									},
									decay: {
										min: 0.01,
										max: 0.02,
									},
									delay: {
										min: 18,
										max: 42,
									},
									particles: 150,
									intensity: 50,
									gravity: 2.5,
									explosion: 8,
									flickering: 50,
								}}
								style={{
									top: 120,
									left: '5%',
									width: '90%',
									height: 'calc(100vh - 300px)',
									position: 'fixed',
									background: 'transparent',
									backgroundPosition: '50% 50%',
								}}
							/>
						</div>
					)}
				</div>
			)}
			<img className='cloudRight' src='./images/cloud-r.png' alt='cloud' />
			<img className='cloudLeft' src='./images/cloud-l2.png' alt='cloud' />
			<footer className='footer'>
				<div className='topFooter'>
					<div className='detailsContainer'>
						<a
							href='https://github.com/AdiBader'
							target='_blank'
							rel='noreferrer'
							className='socialIcon githubInIcon'
						>
							<FaGithub />
						</a>
						<a
							href='https://www.linkedin.com/in/adi-bader-727554146/'
							target='_blank'
							rel='noreferrer'
							className='socialIcon linkedInIcon'
						>
							<FaLinkedinIn />
						</a>
					</div>
				</div>
				<div className='bottomFooter'>
					<div className='detailsContainer'>
						<a
							href='mailto:Adibader1@gmail.com'
							className='details emailDetails'
						>
							<FaEnvelope className='detailIcon' /> Adibader1@gmail.com
						</a>

						<a href='tel:0502056752' className='details phoneDetails'>
							<FaPhone className='detailIcon' /> +972 50-2056752
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Level9;
