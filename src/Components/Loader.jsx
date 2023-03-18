// import spinner from './images/Dspinner.gif';

function Loader() {
	return (
		<div
			className='loader'
			style={{
				width: '100%',
				height: `${window.innerHeight}px`,
				backgroundColor: 'red',
				position: 'absolute',
				top: 0,
				zIndex: 999,
			}}
		>
			<img
				src='./images/Dspinner.gif'
				alt='Loading...'
				style={{
					width: '50px',
					margin: '40vh auto',
					display: 'block',
					padding: '0 10px 16px',
				}}
			/>
		</div>
	);
}

export default Loader;
