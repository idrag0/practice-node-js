import './App.css'
import Header from './component/Header'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './component/Home'
import AddTask from './component/AddTask'
import Update from './component/Update'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/add' element={<AddTask/>}/>
        <Route path='/update/:id' element={<Update/>}/>
      </Routes>
    </>
  )
}

export default App
