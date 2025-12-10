import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Card from './components/Card' // ✅ Capitalized component name

function App() {
  return (
    <div className="p-6 text-center">
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-6">
        Tailwind Test
      </h1>
      <Card /> 
      <Card/> {/* ✅ Capitalized component usage */}
    </div>
  )
}

export default App
