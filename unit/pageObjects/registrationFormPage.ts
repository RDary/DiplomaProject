import { specialSymbols, emailSeparator } from '../utils/constants';
export class RegistrationForm {
  static loginInput(login: string): string {
    const arrayLogin = login.split('');
    const checkArrLogin = arrayLogin.filter(
      (item: string) => !specialSymbols.includes(item)
    );
    if (JSON.stringify(checkArrLogin) === JSON.stringify(arrayLogin)) {
      return login;
    } else {
      return 'Invalid symbols';
    }
  }

  static emailInput(email: string): string {
    const arrayEmail = email.split('');
    if (!arrayEmail.includes(emailSeparator)) {
      return `Missing symbol ${emailSeparator}`;
    }
    const checkArrEmail = arrayEmail.filter(
      (item: string) => !specialSymbols.includes(item)
    );
    if (JSON.stringify(checkArrEmail) === JSON.stringify(arrayEmail)) {
      return email;
    } else {
      return 'Invalid symbols';
    }
  }

  static passwordInput(password: string): string {
    const arrayPassword = password.split('');
    const checkArrPassword = arrayPassword.filter(
      (item: string) => !specialSymbols.includes(item)
    );
    if (JSON.stringify(checkArrPassword) === JSON.stringify(arrayPassword)) {
      return password;
    } else {
      return 'Invalid symbols';
    }
  }

  static confirmPasswordInput(confirmPassword: string) {
    const confirmArrayPassword = confirmPassword.split('');
    const checkConfirmArrayPasswordInput = confirmArrayPassword.filter(
      (item: string) => !specialSymbols.includes(item)
    );
    if (
      JSON.stringify(checkConfirmArrayPasswordInput) ===
      JSON.stringify(confirmArrayPassword)
    ) {
      return confirmPassword;
    } else {
      return 'Invalid password';
    }
  }
}
