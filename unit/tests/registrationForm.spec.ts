import { RegistrationForm } from '../pageObjects/registrationFormPage';
import {
  minLoginLength,
  minPasswordLength,
  maxPasswordLength,
  emailSeparator,
  emailDot,
  VALUES_POSITIVE,
  EXPECTED_VALUES_POSITIVE,
  VALUES_NEGATIVE,
  EXPECTED_VALUES_NEGATIVE,
} from '../utils/constants';

describe('Registration Form testing', () => {
  test('Check that the login field contains correct value', () => {
    expect(RegistrationForm.loginInput(VALUES_POSITIVE.login)).toEqual(
      EXPECTED_VALUES_POSITIVE.login
    );
  });

  test('Check that the login field contains incorrect value', () => {
    expect(RegistrationForm.loginInput(VALUES_NEGATIVE.login)).not.toEqual(
      EXPECTED_VALUES_NEGATIVE.login
    );
  });

  test('Check that the login field is at least 1 symbol', () => {
    expect(
      RegistrationForm.loginInput(VALUES_POSITIVE.login).length
    ).toBeGreaterThan(minLoginLength);
  });

  test('Check that the login field is not empty', () => {
    expect(RegistrationForm.loginInput(VALUES_POSITIVE.login)).not.toBeNull();
  });

  test('Check that the email field contains @', () => {
    expect(RegistrationForm.emailInput(VALUES_POSITIVE.email)).toContain(
      emailSeparator
    );
  });

  test('Check that the email field not contains @', () => {
    expect(RegistrationForm.emailInput(VALUES_NEGATIVE.email)).not.toBe(
      emailSeparator
    );
  });

  test('Check that the email field contains dot', () => {
    expect(RegistrationForm.emailInput(VALUES_POSITIVE.email)).toContain(
      emailDot
    );
  });

  test('Check that the password is at least 8 characters', () => {
    expect(
      RegistrationForm.passwordInput(VALUES_POSITIVE.password).length
    ).toBeGreaterThanOrEqual(minPasswordLength);
  });

  test('Check that the password is no longer than 20 characters', () => {
    expect(
      RegistrationForm.passwordInput(VALUES_POSITIVE.password).length
    ).not.toBeGreaterThan(maxPasswordLength);
  });

  test('Check that the Confirm password field contains valid password', () => {
    expect(
      RegistrationForm.confirmPasswordInput(VALUES_POSITIVE.password)
    ).toContain(EXPECTED_VALUES_POSITIVE.password);
  });

  test('Check that the Confirm password field contains invalid password', () => {
    expect(
      RegistrationForm.confirmPasswordInput(VALUES_NEGATIVE.password)
    ).not.toEqual(EXPECTED_VALUES_NEGATIVE.password);
  });
});
