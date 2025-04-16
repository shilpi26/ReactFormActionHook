import { isEmail, isNotEmpty, isEqualToOtherValue, hasMinLength } from "./validation";

export function signupAction( prevFromState, formData){
  const email = formData.get('email');
const passwrod = formData.get('password');
const confirmPassword = formData.get('confirm-password');
const firstName = formData.get('first-name');
const lastName = formData.get('last-name');
const role=formData.get('role');
const terms= formData.get('terms');
const acquisitionChannel = formData.getAll('acquisition')

let errors =[];

if(!isEmail(email)){
  errors.push('Invalid email address');
}

if(!isNotEmpty(passwrod) || hasMinLength(passwrod,6)){
  errors.push('you must provide the password at least 6 characters.');
}

if(isEqualToOtherValue(passwrod,confirmPassword)){
  errors.push('Passwords do not match');
}

if(isNotEmpty(firstName) || isNotEmpty(lastName)){
  errors.push('please provide both your first and last name.');
}

if(!isNotEmpty(role)){
  errors.push('please select role');
}
if(!terms){
  errors.push('You must agree to the terms and conditions');
}

if(acquisitionChannel.length === 0){
  errors.push('Please seclect the acquistions');
}

if(errors.length > 0){
  return{ errors, enteredValue : {
    email,
    passwrod,
    confirmPassword,
    firstName,
    lastName,
    role,
    terms,
    acquisitionChannel
  }};
}

return { errors:null};
}