import Button from './button'

const App = () => {
	return (
		<div>
			<h1>Hola Mundo</h1>
			<Button onClick={() => console.log('clickeado')}>
			Enviar
			</Button>
			<h1>Hola Mundo</h1>
		</div>
		)
}

export default App