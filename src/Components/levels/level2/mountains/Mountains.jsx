import './mountains.css';
import { useContext } from 'react';
import PortfolioContext from '../../../../Context/PortfolioContext';
import RibbonTitle from '../../../ribbonTitle/RibbonTitle';
import { isMobile } from 'react-device-detect';

function Mountains() {
	const { pageXposition } = useContext(PortfolioContext);

	function animateMountain() {
		if (isMobile) {
			return pageXposition < -80 && 'animateMountain';
		} else {
			return pageXposition < -50 && 'animateMountain';
		}
	}
	return (
		<>
			<RibbonTitle rTitle={'Programming Languages'} />
			<div className='tableDiv'>
				<div className='divCat'>
					<div className='divCatTitle'>EXPERT</div>
				</div>

				<div className='divCat'>
					<div className='divCatTitle'>ADVANCED</div>
				</div>

				<div className='divCat'>
					<div className='divCatTitle'>INTERMEDIATE</div>
				</div>

				<div className='divCat'>
					<div className='divCatTitle'>ELEMENTARY</div>
				</div>

				<div className='divCat'>
					<div className='divCatTitle'>BEGINNER</div>
				</div>
			</div>
			<div className={`mountains ${animateMountain()}`}>
				<div className='mountain mountainHtml'>
					<img
						src='./images/htmlTxt.png'
						className='mountainTxt htmlTxt'
						alt='montain'
					/>
				</div>
				<div className='mountain mountainCss'>
					<img
						src='./images/cssTxt.png'
						className='mountainTxt cssTxt'
						alt='montain'
					/>
				</div>
				<div className='mountain mountainJs'>
					<img
						src='./images/jsTxt.png'
						className='mountainTxt jsTxt'
						alt='montain'
					/>
				</div>
				<div className='mountain mountainReact'>
					<img
						src='./images/reactTxt.png'
						className='mountainTxt reactTxt'
						alt='montain'
					/>
				</div>
			</div>
		</>
	);
}

export default Mountains;
