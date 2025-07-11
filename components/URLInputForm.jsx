import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { isValidURL, isShortcodeValid, isValidValidity } from '../utils/validators';

const initialState = { url: '', shortcode: '', validity: '' };

const URLInputForm = ({ onSubmit }) => {
  const [inputs, setInputs] = useState([ { ...initialState } ]);
  const [errors, setErrors] = useState([ {} ]);

  const handleChange = (idx, field, value) => {
    const newInputs = [...inputs];
    newInputs[idx][field] = value;
    setInputs(newInputs);
    const newErrors = [...errors];
    newErrors[idx][field] = undefined;
    setErrors(newErrors);
  };

  const addRow = () => {
    setInputs([...inputs, { ...initialState }]);
    setErrors([...errors, {}]);
  };

  const validate = (input) => {
    const err = {};
    if (!isValidURL(input.url)) err.url = 'Invalid URL';
    if (input.shortcode && !isShortcodeValid(input.shortcode)) err.shortcode = 'Shortcode must be alphanumeric (6 chars)';
    if (input.validity && !isValidValidity(input.validity)) err.validity = 'Validity must be a positive integer';
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = inputs.map(validate);
    setErrors(newErrors);
    if (newErrors.every(err => Object.keys(err).length === 0)) {
      onSubmit(inputs);
      setInputs([ { ...initialState } ]);
      setErrors([ {} ]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        {inputs.map((input, idx) => (
          <Stack direction="row" spacing={2} key={idx} alignItems="center">
            <TextField
              label="Long URL"
              value={input.url}
              onChange={e => handleChange(idx, 'url', e.target.value)}
              error={!!errors[idx]?.url}
              helperText={errors[idx]?.url}
              required
              sx={{ minWidth: 250 }}
            />
            <TextField
              label="Shortcode (optional)"
              value={input.shortcode}
              onChange={e => handleChange(idx, 'shortcode', e.target.value)}
              error={!!errors[idx]?.shortcode}
              helperText={errors[idx]?.shortcode}
              sx={{ minWidth: 180 }}
            />
            <TextField
              label="Validity (days, optional)"
              value={input.validity}
              onChange={e => handleChange(idx, 'validity', e.target.value)}
              error={!!errors[idx]?.validity}
              helperText={errors[idx]?.validity}
              sx={{ minWidth: 180 }}
            />
            {idx === inputs.length - 1 && (
              <Button variant="outlined" onClick={addRow} type="button">+</Button>
            )}
          </Stack>
        ))}
        <Button variant="contained" type="submit">Shorten</Button>
      </Stack>
    </form>
  );
};

export default URLInputForm;