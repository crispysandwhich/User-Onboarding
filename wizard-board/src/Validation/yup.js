import * as yup from 'yup'

export default yup.object().shape({
    name: yup
        .string()
        .min(6, 'Must be more than 6 characters'),
    email: yup
        .string()
        .required('You need an email bro')
        .email('Needs to be an acutal email man'),
    password: yup
        .string()
        .min(5, 'Its week need more characters'),
    terms: yup
        .boolean()
        .oneOf([true], 'Must accept the terms bro')
})