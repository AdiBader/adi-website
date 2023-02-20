import React from 'react';
import { FaStar } from 'react-icons/fa';

function SlideComponent({ content }) {
	return (
		<div className='inSlide'>
			<div className='slideDiv leftSlideDiv'>
				<h2 className='CVyears'>{content.years}</h2>
				<img
					src={content.logoPath}
					alt={content.title + ' logo'}
					className={`companyLogo companyLogo${content.id}`}
				/>
			</div>
			<div className='slideDiv rightSlideDiv'>
				<h2 className='companyTitle'>{content.title.toUpperCase()}</h2>
				<ul className='companyUl'>
					{content.expList.map((item, index) => (
						<li key={index}>
							<FaStar className='starIcon' />
							{item}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default SlideComponent;
