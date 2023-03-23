const CartWidgetCount = ({ items }) => {
	return (
		<span className='absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center'>
			{items}
		</span>
	);
};

export default CartWidgetCount;
