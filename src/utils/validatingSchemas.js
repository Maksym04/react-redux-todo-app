import * as yup from 'yup';

export const TODO_SCHEMA = yup.object({
  body: yup
    .string()
    .min(
      2,
      'Your task must contain at least two symbol, number or Latin letter'
    )
    .max(50, 'Your task must contain a maximum of 50 characters')
    .trim()
    .required('This line must be completed'),
});
