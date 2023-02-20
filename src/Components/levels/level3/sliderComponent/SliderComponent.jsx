import { useContext } from 'react';
import { Slide } from 'react-slideshow-image';
import './sliderComponent.css';
import 'react-slideshow-image/dist/styles.css';
import PortfolioContext from '../../../../Context/PortfolioContext';
import SlideComponent from './SlideComponent';

const workingExp = [
	{
		id: 0,
		title: 'INTERDEAL DEVELOPMENT',
		logoPath: './images/interdeal.png',
		years: '2017 - 2022',
		expList: [
			'Head of community centers department',
			'Build and designed websites with CMS platforms',
			'Managed projects',
			'Coordinated between costumer needs and the company’s technical solutions',
			'Used HTML and CSS',
			'Used JavaScript',
			'Implemented jQuery codes',
			'Committed responsive adjustments to websites',
			'Managed e-commerce websites',
			'Used high design skills',
			'Gave excellent technical support and guidance to customers',
		],
	},
	{
		id: 1,
		title: 'Weizmann Institute of Science',
		logoPath: './images/weizmann-logo.png',
		years: '2016',
		expList: [
			'Build and designed websites',
			'Gave consulting services to scientists in the field of building and designing websites',
			'Used HTML / CSS',
			'Implemented jQuery codes',
			'Worked with Drupal platform.',
		],
	},
	{
		id: 2,
		title: 'Adi Design',
		logoPath: './images/adiDesign.png',
		years: '2014 - 2016',
		expList: [
			'Build and designed websites',
			'Managed websites content',
			'Created graphic materials for businesses',
			'Build branding for businesses.',
		],
	},
];

const SliderComponent = () => {
	const { sliderTractor } = useContext(PortfolioContext);
	return (
		<>
			<Slide
				indicators={true}
				autoplay={false}
				pauseOnHover={false}
				// autoplay={false}
				onStartChange={(oldIndex, newIndex) => {
					console.log(oldIndex, newIndex);
					sliderTractor(oldIndex, newIndex);
				}}
			>
				{workingExp.map((item) => {
					return <SlideComponent content={item} key={item.id} />;
				})}
			</Slide>
		</>
	);
};

export default SliderComponent;
