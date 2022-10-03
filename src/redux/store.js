import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './slices/pokeList';
// eslint-disable-next-line import/named
import searchReducer from './slices/searchFilter';

const store = configureStore({
    reducer: {
        search: searchReducer,
        pokemons: pokemonReducer,
    },
});

export default store;
