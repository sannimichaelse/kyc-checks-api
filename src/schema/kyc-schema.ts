import * as Joi from 'joi';

export const kycSchema: Joi.ObjectSchema = Joi.object().keys({
    birthDate:  Joi.date()
    .format("YYYY-MM-DD") 
    .raw()
    .error(() => "Invalid Date Format").required(),
    givenName: Joi.string().trim().min(1).max(100).required(),
    middleName: Joi.string().trim().min(1).max(100),
    familyName: Joi.string().trim().min(1).max(100).required(),
    licenceNumber: Joi.string().trim().required(),
    expiryDate: Joi.date()
    .format("YYYY-MM-DD") 
    .raw()
    .error(() => "Invalid Date Format").required(),
});
  