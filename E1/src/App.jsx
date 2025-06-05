import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Card from './components/Card'
import './App.css'

function App() {
  const info = [
    {title: 'Card 1', description: 'descripcion de la card 1'},
    {title: 'Card 2', description: 'descripcion de la card 2'},
    {title: 'Card 3', description: 'descripcion de la card 3'},
  ]
  return (
    <>
      {info.map((card, index) => (
        <Card 
          key={index} 
          title={card.title} 
          description={card.description}
        />
      ))}
    </>
  )
}

export default App
