import Level1 from './levels/level1/Level1';
import Level2 from './levels/level2/Level2';
import Level3 from './levels/level3/Level3';
import Level8 from './levels/level8/Level8';
import Level9 from './levels/level9/Level9';

import { useContext } from 'react';
import PortfolioContext from '../Context/PortfolioContext';

function Board() {
	const { currentLevel, closeSlider } = useContext(PortfolioContext);

	return (
		<div className='board'>
			{currentLevel <= 2 && <div className='laundry'></div>}
			{currentLevel < 2 && <Level1 />}
			{currentLevel > 1 && currentLevel < 9 && <Level2 />}
			{currentLevel > 1 && currentLevel < 9 && (
				<Level3 currentLevel={currentLevel} closeSlider={closeSlider} />
			)}
			{currentLevel >= 6 && currentLevel < 9 && (
				<Level8 currentLevel={currentLevel} />
			)}
			{currentLevel >= 8 && <Level9 currentLevel={currentLevel} />}
		</div>
	);
}

export default Board;
