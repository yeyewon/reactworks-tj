import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, reset, incrementByAmount } from "../store/CounterSlice"
import { useState } from "react"

const Counter = () => {

    // store의 state에서 count값 가져옴
    const count = useSelector(state => state.counter.count)

    // 액션 보내기
    const dispatch = useDispatch()

    const [inputvalue, setInputValue] = useState(0)

    // 입력값 상태 핸들러
    const handleInputChange = (e) => {
        setInputValue(Number(e.target.value))
    }

    // 입력값 만큼 카운트 증가
    const handleIncrementAmount = () => {
        dispatch(incrementByAmount(inputvalue))
    }

    return (
        <div>
            <h2>counter</h2>
            <h3>Count: {count}</h3>

            <div>
                <button onClick={() => dispatch(increment())}>증가</button>
                <button onClick={() => dispatch(decrement())}>감소</button>
                <button onClick={() => dispatch(reset())}>초기화</button>
            </div>
            <div>
                <input 
                    type="number" 
                    onChange={handleInputChange}
                    value={inputvalue}
                />
                <button onClick={handleIncrementAmount}>입력값만큼 증가</button>
            </div>
        </div>
    )
}

export default Counter