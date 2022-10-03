import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { ReactComponent as AddIcon } from '../../assets/icons/AddIcon.svg';
import { ReactComponent as RemoveIcon } from '../../assets/icons/RemoveIcon.svg';
import { FilterContainer } from './PokeFilters.styled';
import { getPokeGendersLabel, getPokeStatsLabel, getPokeTypesLabel, pokeGender, pokeStats, pokeTypes } from '../../data';
import CustomAccordion from '../PokeAccordion';
import { useDispatch } from 'react-redux';
import { setPokeGenderFilters, setPokeTypeFilters } from '../../redux/slices/searchFilter';

const FilterAccordion = () => {
    const [expanded, setExpanded] = React.useState('panel1');
    const [pokeTypes, setPokeTypes] = useState();
    const [pokeGenders, setPokeGenders] = useState();
    const [pokeStats, setPokeStats] = useState();
    const dispatch = useDispatch();

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const onChangeType = (value) => {
        dispatch(setPokeTypeFilters(value));
    }

    const onChangeGender = (value) => {
        dispatch(setPokeGenderFilters(value));
    }

    useEffect(() => {
        getPokeTypesLabel().then((data) => setPokeTypes(data));
        getPokeGendersLabel().then((data) => setPokeGenders(data));
        getPokeStatsLabel().then((data) => setPokeStats(data));
    }, [])


    return (
        <FilterContainer>
            <CustomAccordion
                key='type'
                panelName='type'
                handleChange={handleChange}
                expanded={expanded}
                data={pokeTypes}
                firstType={pokeTypes?.[0].name}
                onChangeCheckbox={onChangeType}
            />
            <CustomAccordion
                key='gender'
                panelName='gender'
                handleChange={handleChange}
                expanded={expanded}
                data={pokeGenders}
                firstType={pokeGenders?.[0].name}
                onChangeCheckbox={onChangeGender}
            />
            <CustomAccordion
                key='stats'
                panelName='stats'
                handleChange={handleChange}
                expanded={expanded}
                data={pokeStats}
                firstType={pokeStats?.[0].name}
            />
        </FilterContainer>
    )
}

export default FilterAccordion;