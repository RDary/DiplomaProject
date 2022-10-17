import { getLogin, getEmail, getPassword } from '../utils/helpers';
import { RegistrationForm } from '../pageObjects/registrationFormPage';
import {
  MIN_LOGIN_LENGTH,
  EMAIL_DOT,
  EMAIL_DOG,
  EMAIL_DOG_INVALID,
  MIN_PASSWORD_LENGTH,
  SPACE_INPUT,
  MAX_PASSWORD_LENGTH,
  VALID_PASSWORD,
  INVALID_PASSWORD,
} from '../utils/expectedValues';

const registrationForm: any = new RegistrationForm(
  getLogin(),
  getEmail(),
  getPassword()
);

describe('Registration Form testing', () => {
  test('Enter in the login field min 1 symbol', () => {
    expect(registrationForm.loginInput().length).toBeGreaterThan(
      MIN_LOGIN_LENGTH
    );
  });
  test('Check that the login field is not empty', () => {
    expect(registrationForm.loginInput()).not.toBeNull();
  });
  test('Check that the email field contains @', () => {
    expect(registrationForm.emailInput()).toContain(EMAIL_DOG);
  });
  test('Check that the email field contains dot', () => {
    expect(registrationForm.emailInput()).toContain(EMAIL_DOT);
  });
  test('Negative: Check that the email is not contain @@', () => {
    expect(registrationForm.emailInput()).not.toContain(EMAIL_DOG_INVALID);
  });
  test('Check that the password is at least 8 characters', () => {
    expect(registrationForm.password.length).toBeGreaterThanOrEqual(
      MIN_PASSWORD_LENGTH
    );
  });
  test('Negative: Check that the password is  not contains space', () => {
    expect(registrationForm.password).not.toContain(SPACE_INPUT);
  });
  test('Negative: Check that the password is no longer than 20 characters', () => {
    expect(registrationForm.password.length).not.toBeGreaterThan(
      MAX_PASSWORD_LENGTH
    );
  });
  test('Check that the Confirm password field is valid password', () => {
    let passwordAndConfirmedPassword: string = registrationForm.password;
    expect(
      registrationForm.confirmPasswordInput(passwordAndConfirmedPassword)
    ).toEqual(VALID_PASSWORD);
  });
  test('Check that the Confirm password field is invalid password', () => {
    expect(registrationForm.confirmPasswordInput(getPassword())).toEqual(
      INVALID_PASSWORD
    );
  });
});
