import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, Typography } from '@mui/material';

export default function AutocompleteHint() {
  const hint = React.useRef('');
  const [inputValue, setInputValue] = React.useState('');
  return (
    <Autocomplete
      onKeyDown={(event) => {
        if (event.key === 'Tab') {
          if (hint.current) {
            setInputValue(hint.current);
            event.preventDefault();
          }
        }
      }}
      onBlur={() => {
        hint.current = '';
      }}
      disablePortal
      inputValue={inputValue}
      filterOptions={(options, state) => {
        const displayOptions = options.filter((option) =>
          option.label
            .toLowerCase()
            .trim()
            .includes(state.inputValue.toLowerCase().trim()),
        );

        return displayOptions;
      }}
      id="combo-box-hint-demo"
      options={top100Films}
      sx={{ width: 1000 }}
      renderInput={(params) => {
        return (
          <Box sx={{ position: 'relative' }}>
            <Typography
              sx={{ position: 'absolute', opacity: 0.5, left: 14, top: 16 }}
            >
              {hint.current}
            </Typography>
            <TextField
              {...params}
              onChange={(e) => {
                const newValue = e.target.value;
                setInputValue(newValue);
                const matchingOption = top100Films.find((option) =>
                  option.label.startsWith(newValue),
                );

                if (newValue && matchingOption) {
                  hint.current = matchingOption.label;
                } else {
                  hint.current = '';
                }
              }}
              label="search"
            />
          </Box>
        );
      }}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
];

