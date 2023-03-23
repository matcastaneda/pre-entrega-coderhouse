import React from 'react';

const MenuIcon = ({ width, height }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			width={width}
			height={height}
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
			/>
		</svg>
	);
};

export default MenuIcon;
