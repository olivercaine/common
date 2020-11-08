import * as Yup from 'yup';

// Password
export const containsUppercase = (s: string | null | undefined): boolean => {
    return !!s && s.length - s.replace(/[A-Z]/g, '').length > 0;
};

export const containsLowercase = (s: string | null | undefined): boolean => {
    return !!s && s.length - s.replace(/[a-z]/g, '').length > 0;
};

export const containsNumber = (s: string | null | undefined): boolean => {
    return !!s && s.replace(/[^0-9]/g, '').length > 0;
};

export const containsSpecialCharacter = (s: string | null | undefined): boolean => {
    return !!s && /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(s);
};

// Yup
export const minLength = 8;
export const passwordValidation = Yup.string()
    .required('Password is required')
    .test('containsUppercase', 'Password needs at least one uppercase letter', containsUppercase)
    .test('containsNumber', 'Password needs at least one number', containsNumber)
    .test('containsSpecialCharacter', 'Password needs at least one special character', containsSpecialCharacter)
    .min(minLength, `Please enter a password which is at least ${minLength} characters`);

export const emailValidation = Yup.string()
    .required('Email is required')
    .email('Please enter a valid email address');
