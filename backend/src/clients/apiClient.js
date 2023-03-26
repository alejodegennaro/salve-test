import Boom from '@hapi/boom';
import {getCSV} from '../utils/csvParser';

/**
 * Here we would make our queries into the database instead
 */

export const getClinics = async () => {
  try {
    const data = await getCSV('clinics.csv');
    return data;
  } catch (e) {
    throw Boom.notFound('Error fetching clinic data');
  }
};

export const getPatientsByClinicId = async (clinicId) => {
  try {
    const data = await getCSV(`patients-${clinicId}.csv`);
    return data;
  } catch (e) {
    throw Boom.notFound('Patient data not found for the given clinic');
  }
};
