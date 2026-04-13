import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deposit, withdraw } from "../store/bankSlice"

const Banking = () => {

    const balance = useSelector(state => state.bank.balance)

    // 금액 입력값 상태 변화
    const [amount, setAmount] = useState(0)

    // 입력값 변경 핸들러
    const handleAmountChange = (e) => {
        setAmount(e.target.value);
        console.log(e.target.value);
    }

    // dispatch() 함수 가져오기
    const dispatch = useDispatch();

    // 예금 클릭 시 deposit 액션
    const handleDeposit = () => {
        dispatch(deposit(Number(amount)))
    }

    // 출금 클릭 시 withdraw 액션
    const handlewithdraw = () => {
        dispatch(withdraw(Number(amount)))
    }

    return (
        <div>
            <h2>은행 업무</h2>
            <h3>잔액: {balance}</h3>
            <input 
                type="number" 
                value={amount}
                onChange={handleAmountChange}
                step={1000}
            />
            <button onClick={handleDeposit}>입금</button>
            <button onClick={handlewithdraw}>출금</button>
        </div>
    )
}

export default Banking