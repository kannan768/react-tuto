import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    islogin:null
}

const isloginslicer = createSlice({
    name: 'islogin',
    initialState,
    reducers: {
        setuser: (state,action) => {
            state.islogin=action.payload
        },
        removeuser: (state, action) => {
            state.islogin = null;
        }
    }
})

export const { setuser,removeuser } = isloginslicer.actions;
export default isloginslicer.reducer