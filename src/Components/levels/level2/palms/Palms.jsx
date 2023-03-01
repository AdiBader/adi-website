import './palms.css';
import { useContext } from 'react';
import RibbonTitle from '../../../ribbonTitle/RibbonTitle';
import PortfolioContext from '../../../../Context/PortfolioContext';
import { isMobile } from 'react-device-detect';

function Palms() {
	const { pageXposition } = useContext(PortfolioContext);

	function animatePalm() {
		if (isMobile) {
			return pageXposition < -225 && 'animatePalm';
		} else {
			return pageXposition < -130 && 'animatePalm';
		}
	}

	return (
		<>
			<RibbonTitle rTitle={'Graphic Software'} />
			<div className='tags'>
				<div className='tag tag1'>
					<p>Photoshop</p>
				</div>
				<div className='tag tag2'>
					<p>Illustrator</p>
				</div>
				<div className='tag tag3'>
					<p>Indesign</p>
				</div>
				<div className='tag tag4'>
					<p>Premier</p>
				</div>
			</div>
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

			<div className={`palms ${animatePalm()}`}>
				<div className='palm palm1'>
					<div className='palmBody'></div>
				</div>
				<div className='palm palm2'>
					<div className='palmBody'></div>
				</div>
				<div className='palm palm3'>
					<div className='palmBody'></div>
				</div>
				<div className='palm palm4'>
					<div className='palmBody'></div>
				</div>
			</div>
		</>
	);
}

export default Palms;
