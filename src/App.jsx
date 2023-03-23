import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

import './assets/styles/globals.css';

const App = () => {
	return (
		<>
			<NavBar />

			<main className='p-4'>
				<ItemListContainer greeting='Saludos desde Chile!' />
				<ItemCount />
			</main>
		</>
	);
};

export default App;
