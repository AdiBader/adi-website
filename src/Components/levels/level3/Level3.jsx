// import { useContext } from 'react';
import './level3.css';
import SliderComponent from './sliderComponent/SliderComponent';
import { TfiClose } from 'react-icons/tfi';
// import PortfolioContext from '../../../Context/PortfolioContext';
import AdiTractor from './adiTractor/AdiTractor';
import SectionTitle from '../../sectionTitle/SectionTitle';
import RibbonTitle from '../../ribbonTitle/RibbonTitle';
import WchComponent from './wchComponent/WchComponent';

function Level3({ currentLevel, closeSlider }) {
	return (
		<div className='level3'>
			<SectionTitle sTitle={'EXPERIENCE'} />
			<div className='waterDiv'>
				<div className='water'></div>
				<div className='water water2'></div>
			</div>
			<div className='field'></div>
			{currentLevel > 2 && currentLevel < 7 && (
				<div className='sliderDiv'>
					<RibbonTitle rTitle={'Former Positions'} />
					<button className='closeSlider' onClick={closeSlider}>
						<TfiClose />
					</button>

					<SliderComponent />
				</div>
			)}
			{currentLevel > 5 && currentLevel < 8 && <WchComponent />}
			{currentLevel === 7 && <AdiTractor />}
		</div>
	);
}

export default Level3;
