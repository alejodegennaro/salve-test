import React from 'react';
import { Typography} from '@mui/material';


 const Header = ({title}) => {
    return (
        <Typography variant="h3" component="h3" sx={{ textAlign: 'center', fontWeight: 600}}>
            {title}
       </Typography>
    )
}

export default Header;