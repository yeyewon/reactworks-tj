import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './layouts/Header'
import BankReducer from './reducer/BankReducer'
import CounterReducer from './reducer/CounterReducer'
import ParentTheme from './context/ParentTheme'

function App() {

  return (
    <>
      <section id='container'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<BankReducer />} />
            <Route path='/bank' element={<BankReducer />} />
            <Route path='/counter' element={<CounterReducer />} />
            <Route path='/theme' element={<ParentTheme />} />
          </Routes>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App
