import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import PokeList from '../../components/PokeList';
import Search from '../../components/Search';
import Wrapper from '../../components/utils/Wrapper';
import { getPokemons } from '../../data';
import { setPokeList } from '../../redux/slices/pokeList';
import { StyledNotFound } from './Home.styled';

const Home = () => {
    const pokelist = useSelector((state) => state.pokemons.pokeList);
    const searchTerm = useSelector((state) => state.search.searchTerm);
    const dispatch = useDispatch();

    const getPokemonsList = async () => {
        const pokemons = await getPokemons();
        return pokemons;
    }

    useEffect(() => {
        getPokemons().then((data) => {
            dispatch(setPokeList(data));
        });
    }, [])

    useEffect(() => {
        if (searchTerm) {
            getPokemons().then((data) => {
                const filtered = data.filter((poke) => {
                    let searchCriteria = (poke.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        poke.number.toLowerCase().includes(searchTerm.toLowerCase()));
                    return searchCriteria;
                });
                dispatch(setPokeList(filtered));
            })
        }
    }, [searchTerm])

    return (
        <main>
            <Header />
            <Search />
            {
                (pokelist && pokelist.length > 0) ? (
                    <PokeList pokelist={pokelist} />
                ) : (
                    <StyledNotFound>
                        <Wrapper>
                            <Typography>Sorry ! No Pokemons Found.</Typography>
                        </Wrapper>
                    </StyledNotFound>
                )
            }
        </main>
    )
}

export default Home;