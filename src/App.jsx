import React from 'react';
import Button from './components/Button';

const useState = React.useState;

export default function App() {
	const [contador, setContador] = useState(0);
	return (
		<main className="bg-sky-800 h-screen">
			<nav className="bg-black text-white mx-auto py-5 text-3xl text-center shadow-lg">
				<h1>React with Tailwindcss</h1>
			</nav>
			<div className="container p-5 text-center mx-auto">
				<h1 className="my-5 text-4xl text-white">{contador}</h1>
				<div className="my-8">
					<Button
						texto={'Disminuir'}
						className={'btn btn-red'}
						funcion={() => setContador(contador - 1)}
					/>
					<Button
						texto={'Reset'}
						className={'btn btn-blue'}
						funcion={() => setContador(0)}
					/>
					<Button
						texto={'Aumentar'}
						className={'btn btn-green'}
						funcion={() => setContador(contador + 1)}
					/>
				</div>
			</div>
		</main>
	);
}
