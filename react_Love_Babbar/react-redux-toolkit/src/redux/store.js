import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    //Registering reducer to store for store to dispatch actions (increment/decrement) to it where 
    //it could perform the actions and update state on UI
    counter: counterSlice.reducer
  },
})

