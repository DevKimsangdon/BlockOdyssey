import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    limits: 10,
    skip: 0,
    current_page : 1,
  },
  reducers: {
    setLimits: (state, action) => {
      state.limits = action.payload;
    },
    setList : (state,action) =>{
      state.products = action.payload;
    },
    setFilter : (state,action) =>{
      state.filter = action.payload;
    },
    setTotalProducts : (state, action) =>{
      state.total = action.payload;
    },
    setSkip : (state,action) =>{
      state.skip = action.payload;
    },
    setCurrentPage : (state,action) =>{
      state.current_page = action.payload;
    } 
  },
});

export const { setLimits,setList,setSkip,setCurrentPage ,setTotalProducts,setFilter } = searchSlice.actions;
export default searchSlice.reducer;
