import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    balance: 0
}

const bankSlice = createSlice({
    name: 'bank',
    initialState,
    reducers: {
        // 예금
        deposit: (state, action) => {
            state.balance += action.payload
        },
        // 출금
        withdraw: (state, action) => {
            // 잔액이 출금액보다 많으면
            if(state.balance >= action.payload) {
                state.balance -= action.payload
            }else{
                alert('잔액이 부족합니다')
            }
        },
    }
})

// action, reducer 내보내기 
export const { deposit, withdraw } = bankSlice.actions
export default bankSlice.reducer