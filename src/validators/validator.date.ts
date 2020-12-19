import * as moment from 'moment';

const validateDateFormat = (dateFormat: string) => {
    return moment(dateFormat, 'YYYY-MM-DD', true).isValid();
};

export const isValidDateFormat = (body: any) => {
    const {
        birthDate,
        expiryDate
    } = body;
    if (birthDate && expiryDate) {
        return validateDateFormat(birthDate) && validateDateFormat(expiryDate);
    }
};