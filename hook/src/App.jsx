import { useState } from 'react'
import Dog from './components/Dog'
import './App.css'
import Garden from './components/garden'
import Counter from './components/counter'
import Car from './components/Car'
import AddProduct from './components/AddProduct'
import Box from './components/Box'
import AddDrink from './components/AddDrink'
import User from './components/User'
import Clock from './components/Clock'
import Profile from './card/Profile'
import MapTest from './components/MapTest'
import SignUp from './form/SingUp'
import SignIn from './form/SingIn'

function App() {

  return (
    <>
      {/* <h2>state - 상태관리</h2> */}
      {/* <Box></Box> 내부 모든 것이 children */}
      {/* <Box> 
        <h3>박스안의 내용</h3>
        <p>이것은 Box 컴포넌트 안에 있는 내용입니다</p>
      </Box>
      <Box> 
        <h3>또 다른 박스</h3>
        <p>이것은 또 다른 Box 컴포넌트 안에 있는 내용입니다</p>
      </Box> */}
      {/* <AddProduct /> */}
      {/* <Car /> */}
      {/* <Counter /> */}
      {/* <Dog breed="말티즈" age={3} />
      <Dog breed="진돗개" age={4} /> */}

      {/* <Garden /> */}
      {/* <AddDrink /> */}
      {/* <User /> */}
      {/* <Clock /> */}
      {/* <Profile /> */}
      {/* <MapTest /> */}
      <SignUp />
      <SignIn />
    </>
  )
}

export default App
