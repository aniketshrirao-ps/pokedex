import React, { useState } from 'react';
import Modal from 'react-responsive-modal';
import { closeIcon } from '../../assets/icons/closeIcon';
import { StyledCard, StyledPokeList, StyledCardMedia, StyledTypography, StyledLoadMore } from './PokeList.styled';
import PokeDetails from '../../pages/details';
import Wrapper from '../utils/Wrapper';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';

const imagePerRow = 20;

const PokeList = ({ pokelist }) => {
    const [open, setOpen] = useState(false);
    const [currentPokemon, setCurrentPokemon] = useState(null);
    const [next, setNext] = useState(imagePerRow);
    const { width } = useWindowDimensions();

    const handleOpen = (pokemon) => {
        setOpen(true);
        setCurrentPokemon(pokemon);
    }

    const handleMoreImage = () => {
        setNext(next + imagePerRow);
    };

    const handleClose = () => setOpen(false);

    return (
        <>
            <StyledPokeList>
                <Wrapper width={width > '728' ? '86%' : '95%'}>
                    {
                        pokelist && pokelist?.slice(0, next)?.map((pokemon, index) => (
                            <StyledCard key={index} onClick={() => handleOpen(pokemon)}>
                                <StyledCardMedia
                                    component="img"
                                    height="100"
                                    image={pokemon.image}
                                    alt={pokemon.name}
                                />
                                <StyledTypography>{pokemon.name}</StyledTypography>
                                <StyledTypography>{pokemon.number}</StyledTypography>
                            </StyledCard>
                        ))
                    }
                </Wrapper>
                {next < pokelist?.length && (
                    <StyledLoadMore
                        variant='contained'
                        onClick={handleMoreImage}
                    >
                        Load more
                    </StyledLoadMore>
                )}
            </StyledPokeList>
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
                <PokeDetails pokemon={currentPokemon} />
            </Modal>
        </>
    )
}

export default PokeList;