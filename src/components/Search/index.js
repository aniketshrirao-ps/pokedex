import React, { useState } from 'react'
import { StyledFilterIcon, StyledFormControl, StyledInputLabel, StyledSearch, StyledSearchBar, StyledSearchContainer, StyledSelect } from './Search.styled';
import Wrapper from '../utils/Wrapper';
import { Search as SearchIcon, Tune } from '@mui/icons-material';
import Modal from 'react-responsive-modal';
import PokeFilters from '../PokeFilters';
import { closeIcon } from '../../assets/icons/closeIcon';
import "react-responsive-modal/styles.css";
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../redux/slices/searchFilter';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, Select } from '@mui/material';
import { StyledFormLabel } from '../utils/Dropdowns/Dropdown.styled';

const Search = () => {
    const [showSearchIcon, setShowSearchIcon] = useState(true);
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => state.search.searchTerm);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { width } = useWindowDimensions();
    const [selectedPokeTypes, setSelectedPokeTypes] = useState([]);

    const searchHandler = (e) => {
        dispatch(setSearchTerm(e.target.value));
    }

    const handleSearchIcon = () => {
        if (!searchTerm) {
            setShowSearchIcon(!showSearchIcon);
        }
    }

    return (
        <StyledSearchContainer className='search-container'>
            <Wrapper>
                <StyledSearchBar className="searchbar">
                    {
                        width > '769' && (
                            <StyledFormLabel>Search by</StyledFormLabel>
                        )
                    }
                    <StyledSearch
                        onChange={searchHandler}
                        onFocus={handleSearchIcon}
                        onBlur={handleSearchIcon}
                        type="search"
                        name='search'
                        value={searchTerm}
                        placeholder='Name or Number'
                        aria-describedby='search'
                        aria-labelledby='search'
                    />
                    {showSearchIcon && (<SearchIcon />)}
                </StyledSearchBar>
                {
                    !(width > 769) ? (
                        <StyledFilterIcon className="filter-icon">
                            <Tune onClick={handleOpen} />
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                                center
                                closeOnOverlayClick
                                closeOnEsc
                                classNames={{
                                    overlay: 'customOverlay',
                                    modal: 'searchContainerCustomModal',
                                }}
                                closeIcon={(closeIcon)}
                            >
                                <PokeFilters />
                            </Modal>
                        </StyledFilterIcon>
                    ) : (
                        <PokeFilters />
                    )
                }
            </Wrapper>
        </StyledSearchContainer>
    )
}

export default Search;