import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import ShowBook from './pages/ShowBook'
import Editbook from './pages/Editbook'
import DeleteBook from './pages/DeleteBook'
import CreateBook from './pages/CreateBook'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books/create' element={<CreateBook/>}/>
      <Route path='/books/details/:id' element={<ShowBook/>}/>
      <Route path="/books/:id" element={<ShowBook />} />

      <Route path='/books/edit/:id' element={<Editbook/>}/>
      <Route path='/books/delete/:id' element={<DeleteBook/>}/>
    </Routes>
  )
}

export default App