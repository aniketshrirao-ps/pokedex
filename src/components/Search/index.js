import React, { useState } from 'react'
import { StyledFilterIcon, StyledSearch, StyledSearchBar, StyledSearchContainer } from './Search.styled';
import Wrapper from '../utils/Wrapper';
import { Search as SearchIcon, Tune } from '@mui/icons-material';
import Modal from 'react-responsive-modal';
import PokeFilters from '../PokeFilters';
import { closeIcon } from '../../assets/icons/closeIcon';
import "react-responsive-modal/styles.css";

const Search = () => {
    const [showSearchIcon, setShowSearchIcon] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const searchHandler = (e) => {
        setSearchTerm(e.target.value);
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
            </Wrapper>
        </StyledSearchContainer>
    )
}

export default Search;