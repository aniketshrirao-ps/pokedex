import { ListItemText, MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredPokemonByCategory, getPokeGendersLabel, getPokemons, getPokemonsByFilters, getPokeStatsLabel, getPokeTypesLabel, getUniqueBetweenFilters } from '../../data';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { setPokeList } from '../../redux/slices/pokeList';
import Dropdown from '../utils/Dropdowns';
import FilterAccordion from './FilterAccordion';
import { ApplyButton, ResetButton, StyledCheckbox, StyledFilterControl, StyledFormControl, StyledInputLabel, StyledMenuItem, StyledPokeFilterContainer, StyledSelect } from './PokeFilters.styled';

const PokeFilters = () => {
    const pokeTypesSelected = useSelector((state) => state.search.pokeTypeFilters);
    const pokeGendersSelected = useSelector((state) => state.search.pokeGenderFilters);
    const [selectedPokeTypes, setSelectedPokeTypes] = useState([]);
    const [pokeTypes, setPokeTypes] = useState();
    const [pokeGenders, setPokeGenders] = useState();
    const [pokeStats, setPokeStats] = useState();
    const [isChecked, setIsChecked] = useState(false);
    const { width } = useWindowDimensions();
    const dispatch = useDispatch();

    const applyFilters = async () => {
        const typeData = await getFilteredPokemonByCategory("gender", pokeTypesSelected);
        const genderData = await getFilteredPokemonByCategory("gender", pokeGendersSelected);
        const data = getUniqueBetweenFilters(typeData, genderData);
    }

    const onChangePokeType = async (value) => {
        const typeData = await getFilteredPokemonByCategory("type", value);
        dispatch(setPokeList(typeData));
    }

    const onChangePokeGender = async (value) => {
        const genderData = await getFilteredPokemonByCategory("gender", value);
        dispatch(setPokeList(genderData));
    }

    const onChangePokeStats = () => {
        // for stats filter logic will go here
    }

    useEffect(() => {
        getPokeTypesLabel().then((data) => setPokeTypes(data));
        getPokeGendersLabel().then((data) => setPokeGenders(data));
        getPokeStatsLabel().then((data) => setPokeStats(data));
    }, [])

    return (
        <StyledPokeFilterContainer>
            {
                width > 769 ? (
                    <>
                        <Dropdown
                            dropdownLabel='Type'
                            data={pokeTypes}
                            onChangeCheckbox={onChangePokeType}
                        />
                        <Dropdown
                            dropdownLabel='Gender'
                            data={pokeGenders}
                            onChangeCheckbox={onChangePokeGender}
                        />
                        <Dropdown
                            dropdownLabel='Stats'
                            data={pokeStats}
                            onChangeCheckbox={onChangePokeStats}
                            isDisabled={true}
                        />
                    </>
                ) : (
                    <>
                        <div className="filter-heading">
                            <h2>Filters</h2>
                        </div>
                        <div className="filters">
                            <FilterAccordion />
                        </div>
                    </>
                )
            }
            <StyledFilterControl className="filter-controls">
                <ResetButton >Reset</ResetButton>
                <ApplyButton variant="contained" onClick={applyFilters}>Apply</ApplyButton>
            </StyledFilterControl>
        </StyledPokeFilterContainer>
    )
}

export default PokeFilters;