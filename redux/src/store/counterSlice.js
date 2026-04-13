import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // 카운트 1증가
        increment: (state) => {
            state.count += 1
        },
        // 카운트 1감소
        decrement: (state) => {
            state.count -= 1
        },
        // 초기화
        reset: (state) => {
            state.count = 0
        },
        // 카운트 값을 특정 수량만큼 증가
        incrementByAmount: (state, action) => {
            state.count += action.payload
        }
    }
})

// 액션 생성자 내보내기
export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions

// reducer 내보내기
export default counterSlice.reducer