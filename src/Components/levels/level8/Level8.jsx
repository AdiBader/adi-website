import './level8.css';
import EducationComponent from './educationComponent/EducationComponent';
import SectionTitle from '../../sectionTitle/SectionTitle';

function Level8({ currentLevel }) {
	return (
		<div className='level8'>
			{currentLevel === 7 && (
				<div className='habDiv'>
					<img src='./images/hab.png' alt='' className='hab' />
				</div>
			)}
			{currentLevel === 8 && (
				<>
					<div className='educationDiv'>
						<EducationComponent />
						<SectionTitle sTitle={'EDUCATION'} />
					</div>
					<div className='laundryDiv'>
						<div className='laundry laundry1'></div>
						<div className='laundry laundry2'></div>
					</div>
					)
				</>
			)}
		</div>
	);
}

export default Level8;
