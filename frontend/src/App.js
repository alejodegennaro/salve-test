import * as React from 'react';
import Container from '@mui/material/Container';
import ClinicPatients from './components/patients/ClinicPatients';

const App = () => {
  return (
  <Container maxWidth="sm">
      <ClinicPatients/>
  </Container>
  );
}

export default App;
