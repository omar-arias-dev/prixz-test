import { CELLPHONE_REGEX, EMAIL_REGEX, LASTNAME_REGEX, NAME_REGEX, ONLY_LETTERS_REGEX, ONLY_NUMBERS_REGEX } from "./regex";

export const cellphoneValidator = (value) => CELLPHONE_REGEX.test(value);
export const emailValidator = (value) => EMAIL_REGEX.test(value);
export const lastnameValidator = (value) => LASTNAME_REGEX.test(value);
export const nameValidator = (value) => NAME_REGEX.test(value);
export const onlyLettersValidator = (value) => ONLY_LETTERS_REGEX.test(value);
export const onlyNumbersValidator = (value) => ONLY_NUMBERS_REGEX.test(value);