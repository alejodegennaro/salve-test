import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getClinics,
  getPatients,
  selectClinicOptions,
  selectPatients 
} from './reducer/clinicPatientsSlice';
import Header from './visual/Header';
import ClinicSelector from './visual/ClinicSelector';
import PatientsTable from './visual/PatientsTable';


const ClinicPatients = () => {
  const dispatch = useDispatch();
  const clinics = useSelector(selectClinicOptions);
  const patients = useSelector(selectPatients);

  //get patients for the selected clinic
  const onChangeClinic = clinicId => {
    dispatch(getPatients(clinicId));
  }

  // fetch clinic data to populate selector
  useEffect(() => {
    dispatch(getClinics())
  }, [dispatch]);


  return (
    <>
      <Header title="Clinic Patients"/>
      <ClinicSelector
        onChangeHandler={onChangeClinic}
        options={clinics}
      />
      <PatientsTable data={patients}/>
    </>

  );
};
export default ClinicPatients;
