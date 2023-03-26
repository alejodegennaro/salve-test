import * as apiClient from '../clients/apiClient';

/**
 * These services look unnecessary due to the simplicity of the data.
 * Normally here we would pull and serve all the data required from different clients (DB queries) if needed
 */

export const getClinics = async () => await apiClient.getClinics();

export const getPatientsByClinic = async (clinicId) =>
  await apiClient.getPatientsByClinicId(clinicId);
