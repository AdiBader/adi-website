import './sectionTitle.css';

function SectionTitle({ sTitle }) {
	return (
		<div className='sectionTitle'>
			<div className='sectionTitleDiv'>
				<h1>{sTitle}</h1>
			</div>
		</div>
	);
}

export default SectionTitle;
