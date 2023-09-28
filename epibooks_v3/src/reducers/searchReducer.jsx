import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    searchValue: ""
}

const searchSlice = createSlice(
    {
        name: 'books',
        initialState,
        reducers: {
            setSearch: (state, action) => {
                state.searchValue = action.payload
            }
        }
    }
)

export const {setSearch} = searchSlice.actions
export const S_value = (state) => state.searchZone.searchValue
export default searchSlice.reducer