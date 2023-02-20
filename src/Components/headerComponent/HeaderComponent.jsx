import './headerComponent.css';
import MenuButton from '../sideMenu/MenuButton';
import pdf from './../../ADI-BADER-CV.pdf';
import { GrDocumentPdf } from 'react-icons/gr';

import { useContext } from 'react';
import PortfolioContext from '../../Context/PortfolioContext';

function HeaderComponent() {
	const { goToHome } = useContext(PortfolioContext);

	return (
		<div className='header'>
			<div className='headerGlow'> </div>
			<div className='headerContainer'>
				<MenuButton />
				<img
					src='./images/adi-title.png'
					alt='title'
					className='adiLogo'
					onClick={goToHome}
				/>
				<a
					href={pdf}
					target='_blank'
					rel='noreferrer'
					title='CV'
					className='headerPdfLink'
				>
					<GrDocumentPdf className='pdfLink' />
				</a>
			</div>
		</div>
	);
}

export default HeaderComponent;
