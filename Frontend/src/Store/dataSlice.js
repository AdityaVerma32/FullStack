import { createSlice } from "@reduxjs/toolkit"

const intialState = {
    data: []
}

const dataSlice = createSlice(
    {
        name: 'data',
        initialState: intialState,
        reducers: {
            setData: (state, action) => {
                state.data = action.payload
            }
        }
    }

)

export const { setData } = dataSlice.actions
export default dataSlice.reducer