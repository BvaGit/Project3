import validationRegExp from '../constants/validation'

export const validateRegField = (field, value) => {
    const {loginValidation, passwordValidation} = validationRegExp
    switch(field){
        case 'login':
            console.log('here')
            if (!loginValidation.test(String(value).toLowerCase())) {
                return 'min 3 max 8, no spases, no empties';
            } else {
                return '';
            }
        case 'password':
            if (!passwordValidation.test(String(value).toLowerCase())) {
                if (!value) {
                    return 'password cant be empty'
                }
                return 'min 6 max 12, not empty, no spases, include digital';
            } else {
                return '';
            }
        default:
            return ''

    }
}