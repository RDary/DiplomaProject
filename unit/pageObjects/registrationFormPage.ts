export class RegistrationForm {
  constructor(
    public login: string,
    public email: string,
    public password: string
  ) {
    this.login = login;
    this.email = email;
    this.password = password;
  }

  public loginInput(): string {
    return this.login;
  }

  public emailInput(): string {
    return this.email;
  }

  public confirmPasswordInput(message: string) {
    if (this.password === message) {
      return 'Valid password';
    } else {
      return 'Invalid password';
    }
  }
}
