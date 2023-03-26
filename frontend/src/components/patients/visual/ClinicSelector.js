import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Select from 'react-select';

const boxStyle = {
  margin: '10px 0 10px 0',
}

 const ClinicSelector = ({onChangeHandler, options}) => {
  const [selectedOption, setSelectedOption] = useState(null);

    const onChangeItem = item => {
      setSelectedOption(item);
      if(onChangeHandler){
        onChangeHandler(item.value)
      }
    }

    return (
      <Box sx={boxStyle}>
        <Select
          placeholder="Select a clinic"
          defaultValue={selectedOption}
          onChange={onChangeItem}
          options={options}
        />
    </Box>
    )
}

export default ClinicSelector;