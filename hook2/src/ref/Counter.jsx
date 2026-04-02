import { useRef, useState } from "react"

function Counter() {

    // State
    const [count, setCount] = useState(0);
    console.log("렌더링..");

    // State 증가(직접 접근)
    const increaseCount = () => {
        setCount(count + 1)
    }

    // useRef
    const countRef = useRef(0);
    console.log(countRef); // {current:0} js객체

    // Ref 증가(간접 접근): 렌더링 되도 값 유지 
    const increaseCountRef = () => {
        countRef.current = countRef.current + 1
        console.log("Ref", countRef.current)
    }

    // 일반 변수
    let countVar = 0;

    // 일반 변수 증가: 렌더링 되면 값 초기화
    const increaseCountVar = () => {
        countVar = countVar + 1
        console.log("var", countVar)
    }

    return (
        <div>
            <h2>userRef 예제</h2>

            <h3>State: {count}</h3>
            <button onClick={increaseCount}>State 증가</button>

            <h3>Ref: {countRef.current}</h3>
            <button onClick={increaseCountRef}>Ref 증가</button>
            
            <h3>Var: {countVar}</h3>
            <button onClick={increaseCountVar}>Var 증가</button>
        </div>
    )
}

export default Counter