import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pokeList: [],
};

export const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        setPokeList: (state = initialState, action) => {
            return {
                ...state,
                pokeList: action.payload,
            };
        },
    },
});

// Action creators are generated for each case reducer function
export const { setPokeList } = pokemonSlice.actions;

export default pokemonSlice.reducer;
