import Button from './button'

const App = () => {
	return (
		<div>
			<h1>Hola Mundo</h1>
			<Button onClick={() => console.log('clickeado')}>
			Enviar
			</Button>
			<h1>Hola Mundo</h1>
			<h2>Como estas</h2>
		</div>
		)
}

export default App