import { configureStore } from '@reduxjs/toolkit';
import clinicReducer from '../components/patients/reducer/clinicPatientsSlice';

export const store = configureStore({
  reducer: {
    clinic: clinicReducer
  },
});
