import './App.css'
import Header from './component/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import AddTask from './component/AddTask'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddTask />}/>
      </Routes>
    </>
  )
}

export default App
