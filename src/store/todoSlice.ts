import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ITodo {
  id: number,
  title: string,
  completed: boolean,
  flooded:boolean,
  date: string
}

export interface TodoState {
  todo: ITodo[],
}

const initialState: TodoState = {
  todo: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state: { todo: ITodo[] }, action: PayloadAction<ITodo>) => {
      state.todo.push(action.payload)
    },

    deleteTodo: (state: { todo: ITodo[] }, action: PayloadAction<number>) => {
      state.todo=state.todo.filter(t => t.id !== action.payload)
    },
    changeFlooded: (state: { todo: ITodo[] }, action: PayloadAction<number>) => {
      state.todo.map(t => {
        if (t.id === action.payload) {
          t.flooded = !t.flooded
        }
        return t
      })
    },

    toggleCheckbox: (state: { todo: ITodo[] }, action: PayloadAction<number>) => {
      state.todo.map(t => {
        if (t.id === action.payload) {
          t.completed = !t.completed
        }
        return t
      })
    },
  },
})

export const { addTodo, toggleCheckbox, deleteTodo, changeFlooded } = todoSlice.actions

export default todoSlice.reducer