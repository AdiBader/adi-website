import './birdsComponent.css';

const birdsArray = Array.from({ length: 5 }, (_, i) => i + 1);

function BirdsComponent() {
	return (
		<div>
			{birdsArray.map((el, i) => (
				<div className={'bird bird' + el} key={i}></div>
			))}
		</div>
	);
}

export default BirdsComponent;
