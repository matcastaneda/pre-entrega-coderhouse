const NavbarLinks = ({ items }) => {
	return (
		<ul className='flex space-x-5'>
			{items.map(item => (
				<li
					className='text-xl cursor-pointer text-slate-500 hover:text-slate-800'
					key={item.path}>
					<a href={item.path}>{item.name}</a>
				</li>
			))}
		</ul>
	);
};

export default NavbarLinks;
