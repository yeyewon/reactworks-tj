import { useReducer } from "react"

// 외부에 분리된 reducer함수 정의
// reducer(): 현재 상태와 액션을 받아서 새로운 상태를 반환하는 함수
const reducer = (state, action) => {
    console.log(state, action);
    
    switch(action.type) {
        case "INCREMENT":
            return {count: state.count + 1}
        case "DECREMENT":
            return {count: state.count - 1}
        case "RESET":
            return {count: 0}
        default:
            return state // case에 해당 없으면 현재 상태 반환
    }
}

const CounterReducer = () => {

    // 초기화는 객체로 설정 {count: 0}
    const [state, dispatch] = useReducer(reducer, {count: 0})

    return (
        <div>
            <h2>useReducer 예제</h2>
            <h3>{state.count}</h3>
            {/* dispatch() 요구사항을 전달하는 함수 */}
            <button onClick={() => dispatch({type: "INCREMENT"})}>증가</button>
            <button onClick={() => dispatch({type: "DECREMENT"})}>감소</button>
            <button onClick={() => dispatch({type: "RESET"})}>초기화</button>
        </div>
    )
}

export default CounterReducer