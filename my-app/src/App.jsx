import './App.css'
// import picture from './assets/hero.png'
import Example01 from '../components/Example01.jsx'
import Example02 from '../components/Example02.jsx'

// 버튼 컴포넌트
// function MyButton(){
//   return (
//     <button>목록보기</button>
//   )
// }
function App() {
  //const season = "봄"

  return (
    <>
      <div>
        <h2 className="line">리액트 시작하기</h2>
        {/* <h3 
          style={{
            color: 'red',
            fontWeight: 'bold'
          }}
        >JSX 문법</h3> */}
        {/* <h3>현재 계절은 {season} 입니다</h3> */}
        {/* <img src={picture} alt={"hero"} width="200" /> */}
      </div>

      <div>
        {/* <p>Good Luck <br />행운을 </p> */}
        {/* <MyButton /> */}
        <Example01 />
        <Example02 />
      </div>
    </>
  )
}

export default App