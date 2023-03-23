import CartWidget from '../CartWidget/CartWidget';
import NavbarLinks from './NavbarLinks';

const NavbarList = () => {
	const navbarLinks = [
		{
			name: 'Lacteos',
			path: '#'
		},
		{
			name: 'Bebidas',
			path: '#'
		},
		{
			name: 'Verduras',
			path: '#'
		}
	];

	return (
		<nav className='flex items-center space-x-10'>
			<NavbarLinks items={navbarLinks} />
			<CartWidget />
		</nav>
	);
};

export default NavbarList;
