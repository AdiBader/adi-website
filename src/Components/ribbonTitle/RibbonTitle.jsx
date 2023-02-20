import './ribbonTitle.css';

function RibbonTitle({ rTitle }) {
	return (
		<div className='ribbonTitle'>
			<div className='glow'>&nbsp;</div>
			<div className='ribbonTitleDiv'>
				<h2>{rTitle}</h2>
			</div>
		</div>
	);
}

export default RibbonTitle;
