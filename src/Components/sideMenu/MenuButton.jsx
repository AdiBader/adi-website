import React from 'react';
import { useState } from 'react';
import SideMenu from '../sideMenu/SideMenu';

function MenuButton() {
	const [openMenu, setOpenMenu] = useState(false);

	const closeMenu = () => {
		setOpenMenu(false);
	};
	return (
		<div>
			<button
				className='menuButton'
				onClick={() => setOpenMenu(true)}
				title='Menu'
			>
				<div className='menuButtonLine'></div>
				<div className='menuButtonLine'></div>
				<div className='menuButtonLine'></div>
			</button>
			{openMenu && <SideMenu closeMenu={closeMenu} />}
		</div>
	);
}

export default MenuButton;
