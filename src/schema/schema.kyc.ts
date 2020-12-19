import * as Joi from 'joi';


export const kycSchema = Joi.object().keys({
    birthDate: Joi.date().required(),
    givenName: Joi.string().trim().min(1).max(100).required(),
    middleName: Joi.string().trim().min(1).max(100),
    familyName: Joi.string().trim().min(1).max(100).required(),
    licenceNumber: Joi.string().trim().required(),
    expiryDate: Joi.date().required(),
    stateOfIssue: Joi.string()
      .trim()
      .lowercase()
      .valid('NSW', 'QLD', 'SA', 'TAS', 'VIC', 'WA', 'ACT', 'NT')
      .required(),
});
