import { RegistrationForm } from '../pageObjects/registrationFormPage';
import {
  MIN_LOGIN_LENGTH,
  MIN_PASSWORD_LENGTH,
  MAX_PASSWORD_LENGTH,
  EMAIL_SEPARATOR,
  EMAIL_DOT,
  VALUES_POSITIVE,
  EXPECTED_VALUES_POSITIVE,
  VALUES_NEGATIVE,
  EXPECTED_VALUES_NEGATIVE,
} from '../utils/constants';

describe('Registration Form testing', () => {
  test('Check that the login field contains correct value', () => {
    expect(RegistrationForm.loginInput(VALUES_POSITIVE.LOGIN)).toEqual(
      EXPECTED_VALUES_POSITIVE.LOGIN
    );
  });

  test('Check that the login field contains incorrect value', () => {
    expect(RegistrationForm.loginInput(VALUES_NEGATIVE.LOGIN)).not.toEqual(
      EXPECTED_VALUES_NEGATIVE.LOGIN
    );
  });

  test('Check that the login field is at least 1 symbol', () => {
    expect(
      RegistrationForm.loginInput(VALUES_POSITIVE.LOGIN).length
    ).toBeGreaterThan(MIN_LOGIN_LENGTH);
  });

  test('Check that the login field is not empty', () => {
    expect(RegistrationForm.loginInput(VALUES_POSITIVE.LOGIN)).not.toBeNull();
  });

  test('Check that the email field contains @', () => {
    expect(RegistrationForm.emailInput(VALUES_POSITIVE.EMAIL)).toContain(
      EMAIL_SEPARATOR
    );
  });

  test('Check that the email field not contains @', () => {
    expect(RegistrationForm.emailInput(VALUES_NEGATIVE.email)).not.toBe(
      EMAIL_SEPARATOR
    );
  });

  test('Check that the email field contains dot', () => {
    expect(RegistrationForm.emailInput(VALUES_POSITIVE.EMAIL)).toContain(
      EMAIL_DOT
    );
  });

  test('Check that the password is at least 8 characters', () => {
    expect(
      RegistrationForm.passwordInput(VALUES_POSITIVE.PASSWORD).length
    ).toBeGreaterThanOrEqual(MIN_PASSWORD_LENGTH);
  });

  test('Check that the password is no longer than 20 characters', () => {
    expect(
      RegistrationForm.passwordInput(VALUES_POSITIVE.PASSWORD).length
    ).not.toBeGreaterThan(MAX_PASSWORD_LENGTH);
  });

  test('Check that the Confirm password field contains valid password', () => {
    expect(
      RegistrationForm.confirmPasswordInput(VALUES_POSITIVE.PASSWORD)
    ).toContain(EXPECTED_VALUES_POSITIVE.PASSWORD);
  });

  test('Check that the Confirm password field contains invalid password', () => {
    expect(
      RegistrationForm.confirmPasswordInput(VALUES_NEGATIVE.PASSWORD)
    ).not.toEqual(EXPECTED_VALUES_NEGATIVE.PASSWORD);
  });
});
