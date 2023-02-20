import './birdsGraph.css';
import { useContext } from 'react';
import PortfolioContext from '../../../../Context/PortfolioContext';
import RibbonTitle from '../../../ribbonTitle/RibbonTitle';

function BirdsGraph() {
	const { pageXposition } = useContext(PortfolioContext);
	return (
		<>
			<RibbonTitle rTitle={'Multidisciplinary Worker'} />
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
			<div className='tags'>
				<div className='tag tag1'>
					<p>Project Management</p>
				</div>
				<div className='tag tag2'>
					<p>Costumer Support</p>
				</div>
				<div className='tag tag3'>
					<p>Design</p>
				</div>
				<div className='tag tag4'>
					<p>UX</p>
				</div>
			</div>
			<div
				className={`birdsGraph ${pageXposition < -200 && 'animatebirdsGraph'}`}
			>
				<div className='birdsGraphCol birdsGraphColHtml '>
					<div className='birdItem'></div>
					<div className='birdItem'></div>
					<div className='birdItem'></div>
					<div className='birdItem'></div>
					<div className='birdItem'></div>
				</div>
				<div className='birdsGraphCol birdsGraphColCss'>
					<div className='birdItem'></div>
					<div className='birdItem'></div>
					<div className='birdItem'></div>
					<div className='birdItem'></div>
					<div className='birdItem'></div>
				</div>
				<div className='birdsGraphCol birdsGraphColJs'>
					<div className='birdItem'></div>
					<div className='birdItem'></div>
					<div className='birdItem'></div>
					<div className='birdItem'></div>
				</div>
				<div className='birdsGraphCol birdsGraphColReact'>
					<div className='birdItem'></div>
					<div className='birdItem'></div>
					<div className='birdItem'></div>
				</div>
			</div>
		</>
	);
}

export default BirdsGraph;
