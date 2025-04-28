import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    reset: (state) => {
        state.value = 0
    },
    incrementByAmount: (state, action) => {
        //Rather than treating it as a Number, it is treating it as a string. So, we did this.
      state.value += Number(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions

// exported slice as reducer to be able to register it
export default counterSlice.reducer


