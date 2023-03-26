import * as apiController from '../controllers/apiController';

export default [
  {
    method: 'GET',
    path: '/clinics',
    options: {
      ...apiController.clinicHandler,
      auth: false,
    },
  },
  {
    method: 'GET',
    path: '/patients/{clinicId}',
    options: {
      ...apiController.patientHandler,
      auth: false,
    },
  },
];
