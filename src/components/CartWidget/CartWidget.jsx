import { useState } from 'react';
import CartIcon from '../Icons/CartIcon';
import CartWidgetCount from './CartWidgetCount';

const CartWidget = () => {
	let min = 1;

	const [items, setItems] = useState(min);

	return (
		<div className='relative cursor-pointer'>
			<CartIcon width={35} height={35} />
			{items > 0 && <CartWidgetCount items={items} />}
		</div>
	);
};

export default CartWidget;
