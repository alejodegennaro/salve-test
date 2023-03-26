import Joi from '@hapi/joi';

import * as gameService from '../services/apiService';

export const clinicHandler = {
  async handler(request, h) {
    const clinics = await gameService.getClinics();
    return h.response({clinics});
  },
};

export const patientHandler = {
  validate: {
    params: {
      clinicId: Joi.string().required(),
    },
  },
  async handler(request, h) {
    const {clinicId} = request.params;

    const patients = await gameService.getPatientsByClinic(clinicId);

    return h.response({patients});
  },
};
