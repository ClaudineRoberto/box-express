import { useState } from 'react'
import { Header } from './components/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Header />
    <div className="w-screen h-screen text-white background-image flex justify-start items-center pl-10 ">
      <h1 className='text-7xl leading-snug font-bold'>Redefinindo o futuro<br /> da logística com <span className='text-red-600'>eficiência,<br /> confiança e inovação!</span></h1>
    </div>
   </div>
  )
}

export default App
