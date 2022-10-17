import { HomePage } from './homePage';
import { LOGIN_PAGE_URL } from '../support/constants';

class LoginPage extends HomePage {
  constructor() {
    super();
  }

  public waitForPage = async () => {
    await browser.waitUntil(async () => {
      return (await browser.getUrl()) === `${LOGIN_PAGE_URL}`;
    });
  };

  get emailInput() {
    return $(`//*[@name="email"]`);
  }

  get passwordInput() {
    return $(`//*[@name="current-password"]`);
  }

  get loginButton() {
    return $(
      `//button[@class="Button_button__URNp+ Button_primary__d2Jt3 Button_fullwidth__0HLEu"]`
    );
  }

  public performLogin = async (login: string, password: string) => {
    await (await this.emailInput).setValue(login);
    await (await this.passwordInput).setValue(password);
    await (await this.loginButton).click();
  };

  public clickOnContinueLearnSQLButton = async () => {
    await (
      await $(
        '//button[@class="MainHeader_continueButton__gyOV8 btn btn-dark"]'
      )
    ).click();
  };

  public getPageHeader = async () => {
    return await $(
      `//div[@class="jumbotron container-fluid"]//*[text()="Learn SQL"]`
    );
  };
}
export const loginPage = new LoginPage();
