import { ListItemText, MenuItem } from '@mui/material';
import React, { useState } from 'react'
import { StyledCheckbox, StyledFormControl, StyledInputLabel, StyledSelect } from './Dropdown.styled';

const Dropdown = ({ dropdownLabel, data, isDisabled, onChangeCheckbox }) => {
    const [selectedValue, setSelectedValue] = useState([]);
    const [currentChecked, setCurrentChecked] = useState('');

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setSelectedValue(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );

        const selectedFilters = value.map((filter) => {
            return {
                name: filter,
                checked: (filter) ? true : false,
            }
        })

        onChangeCheckbox(selectedFilters);
    };

    return (
        <>
            <StyledFormControl sx={{ m: 1 }}>
                <StyledInputLabel shrink={false} variant="standard" htmlFor="demo-multiple-checkbox">
                    {dropdownLabel}
                </StyledInputLabel>
                <StyledSelect
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    displayEmpty
                    value={selectedValue}
                    onChange={handleChange}
                    disabled={isDisabled}
                    renderValue={(selected) => {
                        if (selected?.length === 0) {
                            const summaryLabel = `${data?.[0].name} + `;
                            const summaryCount = `${data?.length} More`;
                            return <em>{summaryLabel}<span>{summaryCount}</span></em>;
                        }
                        return selected?.join(', ');
                    }}
                >
                    {data?.map((item) => (
                        <MenuItem key={item.number} value={item.name}>
                            <StyledCheckbox
                                id={item.name}
                                name={item.name}
                                onChange={(event) => setCurrentChecked({ name: item.name, checked: (selectedValue?.indexOf(item.name) > -1) })}
                                label={item.name}
                                aria-labelledby={item.name}
                                checked={selectedValue?.indexOf(item.name) > -1}
                            />
                            <ListItemText htmlFor={item.name} primary={item.name} />
                        </MenuItem>
                    ))}
                </StyledSelect>
            </StyledFormControl>
        </>
    )
}

export default Dropdown;