function SunSticksComponent() {
	const sunShines = Array.from({ length: 16 }, (_, i) => i + 1);

	return (
		<div className='sunSticksDiv'>
			{sunShines.map((sunShine, i) => (
				<div className={'sunStick sunStick' + sunShine} key={i}></div>
			))}
		</div>
	);
}

export default SunSticksComponent;
