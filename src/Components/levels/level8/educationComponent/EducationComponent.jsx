import './educationComponent.css';
import ChangingPic from '../../../ChangingPic';

const educationArray = [
	{
		id: 0,
		title: 'Interactive Media studies',
		school: 'Ruppin Technological College',
		logoPath: './images/ruppin-logo.png',
		years: '2013 - 2015',
		eduText:
			'As part of the studies, I participated in courses such as: Interactive Media Design, UX/UI Design, Fundamentals of Graphic Design, Fundamentals of Marketing, Integrated Marketing, Websites Building and FLASH.',
	},
	{
		id: 1,
		title: 'The Complete JavaScript Course 2022',
		school: 'Udemy',
		logoPath: './images/udemy-logo.png',
		years: '2022',
		eduText:
			'studied the foundations of JavaScript and build a variety of web applications.',
	},
	{
		id: 2,
		title: 'React Front to Back 2022',
		school: 'Udemy',
		logoPath: './images/udemy-logo.png',
		years: '2022',
		eduText:
			'studied the foundations of React JS and build a variety of web applications.',
	},
];

const birdPic1 = './images/switching/bird.png';
const birdPic2 = './images/switching/bird-fly.png';

function EducationComponent() {
	return (
		<div className='educationDivIn'>
			{educationArray.map((item) => {
				return (
					<div className={'eduBlock eduBlock' + item.id} key={item.id}>
						<div className='birdDiv birdDiv1'>
							<ChangingPic
								pic1={birdPic1}
								pic2={birdPic2}
								time={250}
								title={'bird'}
							/>
						</div>
						<div className='birdDiv birdDiv2'>
							<ChangingPic
								pic1={birdPic1}
								pic2={birdPic2}
								time={250}
								title={'bird'}
							/>
						</div>
						<div className='eduBlockIn'>
							<img
								src={item.logoPath}
								alt={item.school + ' logo'}
								className='schoolLogo'
							/>
							<div className='eduYears'>{item.years}</div>
							<div className='eduTitle'>{item.title}</div>
							<div className='eduSchool'>{item.school}</div>
							<div className='eduText'>{item.eduText}</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default EducationComponent;
