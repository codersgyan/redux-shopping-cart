const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },
        remove(state, action) {
            let found = false;
            return state.filter((item) =>{
            if (item.id === action.payload && !found) {
                found = true;
                return false;
              }
              return true;
            }
            );
        },
    },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
