import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Wrapper from '../../components/utils/Wrapper';
import Modal from 'react-responsive-modal';
import { closeIcon } from '../../assets/icons/closeIcon';
import { StyledCard, StyledCardMedia } from '../../components/PokeList/PokeList.styled';
import { StyledPokeAttributes, StyledPokeTypeButton, StyledPokeDescription, StyledPokeDetails, StyledPokeName, StyledPokeNumber, StyledPokeTypeButtonGroup, StyledPokeStats, StyledLinearProgress } from './PokeDetails.styled';
import useWindowDimension from '../../hooks/useWindowDimensions';
import { getFormattedWeakAgainst, getPokeDetails } from '../../data';

const PokeDetails = ({ pokemon }) => {
    const [pokeHeight, setPokeHeight] = useState('');
    const [pokeWeight, setPokeWeight] = useState('');
    const [pokeGender, setPokeGender] = useState('Male,Female');
    const [pokeEggGroups, setPokeEggGroups] = useState();
    const [pokeAbilities, setPokeAbilities] = useState();
    const [pokeType, setPokeType] = useState([]);
    const [pokeWeakAgainst, setPokeWeakAgainst] = useState([]);
    const [pokeStats, setPokeStats] = useState([])
    const [desc, setDesc] = useState('');
    const { width } = useWindowDimension();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const letters = width > 540 ? 230 : 90;

    useEffect(() => {
        // setting code of above attr goes here
        getPokeDetails(parseInt(pokemon.number)).then(async (data) => {
            const detailWeakAgainst = await getFormattedWeakAgainst(data.types);
            setPokeAbilities(data.abilities);
            setPokeEggGroups(data.eggGroup);
            setPokeHeight(data.height);
            setPokeWeight(data.weight);
            setPokeStats(data.stats);
            setPokeType(data.types);
            setPokeWeakAgainst(detailWeakAgainst);
            setDesc(data.desc);
        });
    }, [])


    return (
        <StyledPokeDetails>
            <Wrapper>
                <StyledPokeName className='poke-name'>{pokemon.name}</StyledPokeName>
                <StyledPokeNumber className='poke-number'>{pokemon.number}</StyledPokeNumber>
                <div className="pokemon-info">
                    <StyledCard>
                        <StyledCardMedia
                            component="img"
                            height="100"
                            image={pokemon.image}
                            alt="green iguana"
                            className='poke-image'
                        />
                    </StyledCard>
                    <StyledPokeDescription className='poke-desc'>{desc.length > 10 ? desc.substring(0, letters) + "..." : desc}<span onClick={handleOpen}>read more</span></StyledPokeDescription>
                </div>
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
                        modalContainer: 'customPokeReadMore'
                    }}

                    closeIcon={(closeIcon)}
                >
                    <p>{desc}</p>
                </Modal>
                <StyledPokeAttributes className="poke-attributes">
                    <li className='poke-height'>
                        <Typography className='poke-attr-label'>Height</Typography>
                        <Typography className='poke-attr-value'>{pokeHeight}</Typography>
                    </li>
                    <li>
                        <Typography className='poke-attr-label'>Weight</Typography>
                        <Typography className='poke-attr-value'>{pokeWeight}</Typography>
                    </li>
                    <li>
                        <Typography className='poke-attr-label'>Gender(s)</Typography>
                        <Typography className='poke-attr-value'>{pokeGender}</Typography>
                    </li>
                    <li>
                        <Typography className='poke-attr-label'>Egg Groups</Typography>
                        <Typography className='poke-attr-value'>{pokeEggGroups}</Typography>
                    </li>
                    <li>
                        <Typography className='poke-attr-label'>Abilities</Typography>
                        <Typography className='poke-attr-value'>{pokeAbilities}</Typography>
                    </li>
                    <li>
                        <Typography className='poke-attr-label'>Types</Typography>
                        <StyledPokeTypeButtonGroup>
                            {
                                pokeType.map((type, index) => (
                                    <StyledPokeTypeButton key={index} bgcolor={type.toUpperCase()} size='small' variant='contained' >{type}</StyledPokeTypeButton>
                                ))
                            }
                        </StyledPokeTypeButtonGroup>
                    </li>
                    <li>
                        <Typography className='poke-attr-label'>Weak Against</Typography>
                        <StyledPokeTypeButtonGroup>
                            {
                                pokeWeakAgainst.map((weakAgainst, index) => (
                                    <StyledPokeTypeButton key={index} bgcolor={weakAgainst.toUpperCase()} size='small' variant='contained' >{weakAgainst}</StyledPokeTypeButton>
                                ))
                            }
                        </StyledPokeTypeButtonGroup>
                    </li>
                </StyledPokeAttributes>
                <StyledPokeStats>
                    <Typography className='stats-heading'>Stats</Typography>
                    <ul className="stat-list">
                        {
                            pokeStats.map((stat, index) => (
                                <li key={index}>
                                    <Typography>{stat.name}</Typography>
                                    <StyledLinearProgress variant="determinate" value={parseInt(stat.value)} />
                                    <span className='bar-value'>{stat.value}</span>
                                </li>
                            ))
                        }
                    </ul>
                </StyledPokeStats>
            </Wrapper>
        </StyledPokeDetails>
    )
}

export default PokeDetails;