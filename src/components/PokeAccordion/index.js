import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Checkbox, FormControlLabel, FormGroup, Slider, Typography } from '@mui/material';
import { ReactComponent as AddIcon } from '../../assets/icons/AddIcon.svg';
import { ReactComponent as RemoveIcon } from '../../assets/icons/RemoveIcon.svg';
import { statMarks } from '../../data';
import { useSelector } from 'react-redux';
import { StyledCustomFilter } from './Accordion.styled';
import { StyledCheckbox } from '../utils/Dropdowns/Dropdown.styled';

const CustomAccordion = ({ panelName, handleChange, expanded, data, firstType, onChangeCheckbox }) => {

    const summaryLabel = `(${firstType} + `;
    const summaryCount = `${data?.length} More`;
    const [value, setValue] = useState([70, 150]);
    
    const handleSlider = (event, newValue) => {
        setValue(newValue);
    };

    const handleCheckbox = (e) => {
        onChangeCheckbox({
            name: e.target.name,
            checked: e.target.checked,
        });
    }

    return (
        <StyledCustomFilter className="custom-filter">
            <Accordion expanded={expanded === panelName} onChange={handleChange(panelName)}>
                <AccordionSummary
                    expandIcon={(expanded === panelName) ? (<RemoveIcon />) : (<AddIcon />)}
                    aria-controls={`${panelName}-content`}
                    id={`${panelName}-header`}
                    className={`${panelName}-summary`}
                >
                    <p className='summary-label'>{panelName}</p><p>{summaryLabel} <span>{summaryCount}</span>)</p>
                </AccordionSummary>
                {
                    (panelName === 'stats') ? (
                        <>
                            {
                                data && data.map((label) => (
                                    <AccordionDetails key={label.number}>
                                        <Typography id="input-slider" gutterBottom>
                                            {label.name}
                                        </Typography>
                                        <Slider
                                            getAriaLabel={() => label.name}
                                            value={value}
                                            onChange={handleSlider}
                                            valueLabelDisplay="on"
                                            min={0}
                                            max={210}
                                            step={10}
                                            marks={statMarks}
                                            aria-labelledby="input-slider"
                                        />
                                    </AccordionDetails>
                                ))
                            }
                        </>
                    ) : (
                        <AccordionDetails>
                            <FormGroup>
                                {
                                    data && data.map((label) => (
                                        <FormControlLabel key={label.number} control={<StyledCheckbox name={label.name} aria-labelledby={label.name} onChange={handleCheckbox} />} label={label.name} />
                                    ))
                                }
                            </FormGroup>
                        </AccordionDetails>
                    )
                }
            </Accordion >
        </StyledCustomFilter >
    )
}

export default CustomAccordion;