import { useState } from 'react';

const ItemCount = () => {
	let min = 1;
	let max = 10;

	const [itemCount, setItemCount] = useState(min);

	const handleAdd = () => {
		if (itemCount >= max) return;
		setItemCount(itemCount + 1);
	};

	const handleRemove = () => {
		if (itemCount <= min) return;
		setItemCount(itemCount - 1);
	};

	return (
		<>
			<button
				className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'
				onClick={handleRemove}>
				-
			</button>

			<input
				className='w-12 text-center text-gray-800 font-semibold appearance-none'
				type='text'
				onChange={e => setItemCount(e.target.value)}
				value={itemCount}
			/>

			<button
				className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r'
				onClick={handleAdd}>
				+
			</button>
		</>
	);
};

export default ItemCount;
