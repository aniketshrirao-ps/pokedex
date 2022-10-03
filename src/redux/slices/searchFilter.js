import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchTerm: '',
    pokeTypeFilters: [],
    pokeGenderFilters: [],
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchTerm: (state = initialState, action) => {
            return {
                ...state,
                searchTerm: action.payload,
            };
        },
        setPokeTypeFilters: (state = initialState, action) => {
            if (!state.pokeTypeFilters.find((type) => type.name === action.payload.name) && action.payload.checked) {
                state.pokeTypeFilters.push(action.payload);
            } else if (!action.payload.checked) {
                state.pokeTypeFilters.splice(state.pokeTypeFilters.findIndex(a => a.name === action.payload.name), 1)
            }
        },
        setPokeGenderFilters: (state = initialState, action) => {
            if (!state.pokeGenderFilters.find((type) => type.name === action.payload.name) && action.payload.checked) {
                state.pokeGenderFilters.push(action.payload);
            } else if (!action.payload.checked) {
                state.pokeGenderFilters.splice(state.pokeGenderFilters.findIndex(a => a.name === action.payload.name), 1)
            }
        },
    },
});

// Action creators are generated for each case reducer function
export const { setSearchTerm, setPokeGenderFilters, setPokeTypeFilters } = searchSlice.actions;

export default searchSlice.reducer;
