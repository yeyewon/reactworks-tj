import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";
import Map from "../components/map";
import Like from "../components/Like";
import InputText from "../components/InputText";

function App() {

  // const name = "정예원";

  // const isLogin = true;

  // let message;
  // if(isLogin){
  //   message = <p>환영합니다</p>
  // }else{
  //   message = <p>로그인 해주세요</p>
  // }

  return (
    <>
      {/* <h2>리액트 연습문제</h2>
      <p>{name}님 환영합니다</p>

      <p>{isLogin ? "환영합니다" : "로그인 해주세요"}</p>
      {message}
      <Header />
      <Main />
      <Footer /> */}
      <Map />
      <Like />
      <InputText />
    </>
  )
}

export default App
