import { useContext, useRef } from 'react';
import PortfolioContext from '../Context/PortfolioContext';
import Board from './Board';
import AdiContainer from './adiContainer/AdiContainer';
import { SlEnvolope } from 'react-icons/sl';
import { GrDocumentPdf } from 'react-icons/gr';
import MenuButton from './sideMenu/MenuButton';
import pdf from './../ADI-BADER-CV.pdf';
import { isMobile } from 'react-device-detect';

function MainComponent() {
	const {
		pageXposition,
		pageYposition,
		goDown,
		mountainY,
		currentLevel,
		noTransition,
		goToContact,
	} = useContext(PortfolioContext);
	// console.log(pageXposition);
	// console.log(pageYposition);

	const ref = useRef(null);

	const pyp = (pageYposition / 100) * window.innerHeight;

	function vhToPx(objectY) {
		return (objectY / 100) * window.innerHeight;
	}

	return (
		<div className='mainDiv'>
			<div
				className={`scrollDiv scrollDiv${currentLevel} ${
					noTransition && 'noTransition'
				} ${isMobile && 'mobile'}`}
			>
				<div
					className={`inScrollDiv ${goDown ? 'goDown' : ''}`}
					ref={ref}
					style={{
						left: `${pageXposition}vW`,
						top: `calc(${pyp}px + ${mountainY}vw)`,
						height: `${isMobile ? vhToPx(500) + 'px' : 500 + 'vh'}`,
					}}
				>
					<AdiContainer className='adiContainer' />
					<div className='fixedButtonsDiv'>
						<a
							href={pdf}
							target='_blank'
							rel='noreferrer'
							className='contactLink'
							title='CV'
						>
							<GrDocumentPdf className='pdfLink' />
						</a>

						<div className='contactLink' onClick={goToContact} title='Contact'>
							<SlEnvolope />
						</div>
						<div className='fixedMenuButton'>
							<MenuButton />
						</div>
					</div>

					<Board />
				</div>
			</div>
		</div>
	);
}

export default MainComponent;
