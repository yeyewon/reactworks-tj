import CounterReducer from './reducer/CounterReducer'
import './App.css'
import User from './context/user'
import Counter from './ref/Counter'
import InputFocus from './ref/InputFocus'

function App() {

  return (
    <>
      <section id='container'>
        {/* <Counter /> */}
        {/* <InputFocus /> */}
        {/* <CounterReducer/> */}
        <User />
      </section>
    </>
  )
}

export default App
