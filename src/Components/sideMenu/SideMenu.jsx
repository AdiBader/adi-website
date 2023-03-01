import { useState, useContext } from 'react';
import PortfolioContext from '../../Context/PortfolioContext';
import './sideMenu.css';
import { AiOutlineClose } from 'react-icons/ai';
import { useRef } from 'react';

function SideMenu({ closeMenu }) {
	const [closing, setClosing] = useState('');
	const { goToHome, goToAbout, goToExp, goToEdu, goToContact } =
		useContext(PortfolioContext);
	const boxRef = useRef(null);

	const closingMenu = () => {
		setClosing('closing');
		setTimeout(() => {
			closeMenu();
		}, 500);
	};

	const goTo = (callback) => {
		closingMenu();
		callback();
	};

	const clickedOutside = (e) => {
		if (boxRef.current && !boxRef.current.contains(e.target)) {
			closingMenu();
		}
	};

	return (
		<div className={'sideMenu ' + closing} onClick={(e) => clickedOutside(e)}>
			<div className='sideMenuIn' ref={boxRef}>
				<button className='closeMenu' onClick={closingMenu}>
					<AiOutlineClose />
				</button>

				<ul>
					<li className='sideMenuLi' onClick={() => goTo(goToHome)}>
						<div className='sideMenuDiv'>HOME</div>
					</li>
					<li className='sideMenuLi' onClick={() => goTo(goToAbout)}>
						<div className='sideMenuDiv'>ABOUT</div>
					</li>
					<li className='sideMenuLi' onClick={() => goTo(goToExp)}>
						<div className='sideMenuDiv'>EXPERIENCE</div>
					</li>
					<li className='sideMenuLi' onClick={() => goTo(goToEdu)}>
						<div className='sideMenuDiv'>EDUCATION</div>
					</li>
					<li className='sideMenuLi' onClick={() => goTo(goToContact)}>
						<div className='sideMenuDiv'>CONTACT ME</div>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default SideMenu;
