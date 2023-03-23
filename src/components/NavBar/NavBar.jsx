import NavbarList from './NavbarList';

const NavBar = () => {
	return (
		<header className='flex items-center justify-between px-4 md:px-16 py-8 border-b border-b-slate-200/70'>
			<h1 className='text-2xl md:text-3xl'>
				<a href='#'>Ecommerce Online</a>
			</h1>

			<NavbarList />
		</header>
	);
};

export default NavBar;
