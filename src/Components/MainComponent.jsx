import { useContext } from 'react';
import PortfolioContext from '../Context/PortfolioContext';
import Board from './Board';
import AdiContainer from './adiContainer/AdiContainer';
import { SlEnvolope } from 'react-icons/sl';
import { GrDocumentPdf } from 'react-icons/gr';
import MenuButton from './sideMenu/MenuButton';
import pdf from './../ADI-BADER-CV.pdf';

function MainComponent() {
	const {
		pageXposition,
		pageYposition,
		goDown,
		mountainY,
		pixelY,
		currentLevel,
		noTransition,
		goToContact,
	} = useContext(PortfolioContext);
	console.log(pageXposition);
	console.log(pageYposition);

	return (
		<div className='mainDiv'>
			<div
				className={`scrollDiv scrollDiv${currentLevel} ${
					noTransition && 'noTransition'
				}`}
			>
				<div
					className={`inScrollDiv ${goDown ? 'goDown' : ''}`}
					style={{
						left: `${pageXposition}vW`,
						top: `calc(${pageYposition}vh + ${mountainY}vw + ${pixelY}px)`,
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
