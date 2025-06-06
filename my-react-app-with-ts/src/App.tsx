import Button from './components/Button'
import CounterWithUseReducer from './components/CounterWithUseReducer'

import { ThemeProvider } from './components/ContextApi'
import ThemeToggler from './components/ThemeToggler'

import './App.css'


function greet(name: string): string{

  return `Hola ${name} `
}

function App() {

    const handleClick = () => alert("Ya estoy clickeando")

    console.log(greet("Pech"))

  return (
    <>
      <Button onclick={handleClick} label="Click me" ></Button>

      <CounterWithUseReducer></CounterWithUseReducer>



      <ThemeProvider>
            <ThemeToggler />
        </ThemeProvider>
      
    </>
  )
}

export default App;
