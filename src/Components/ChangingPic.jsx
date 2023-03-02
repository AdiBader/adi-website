import { useEffect, useState } from 'react';

function ChangingPic({ pic1, pic2, time, title }) {
	const [firstPic, setFirstPic] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setFirstPic(!firstPic);
		}, time);
		return () => clearInterval(interval);
	}, [firstPic, time]);

	function whichPic() {
		return firstPic === true ? pic1 : pic2;
	}

	return (
		<div className='changingPicImg'>
			<img src={whichPic()} title={title} alt={title} />
		</div>
	);
}

export default ChangingPic;
