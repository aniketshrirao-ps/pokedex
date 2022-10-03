import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchTerm: '',
    pokeTypeFilters: [],
    pokeGenderFilters: [],
    desktopTypeFilters: [],
    desktopGenderFilters: [],
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
        setDesktopTypeFilters: (state = initialState, action) => {
            state.desktopTypeFilters = action.payload;
        },
        setDesktopGenderFilters: (state = initialState, action) => {
            state.desktopGenderFilters = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setSearchTerm, setPokeGenderFilters, setPokeTypeFilters, setDesktopGenderFilters, setDesktopTypeFilters } = searchSlice.actions;

export default searchSlice.reducer;
