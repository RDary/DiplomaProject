import { FOOTER_ITEMS } from '../support/types';
import { BasePage } from '../pageObjects/basePage';
import { BASE_URL } from '../support/constants';

export class HomePage extends BasePage {
  constructor() {
    super();
  }

  public clickOnChangeThemeButton = async () => {
    await (
      await $(
        '//a[@class="w3-bar-item w3-button bar-icon-hover w3-right w3-hide-small"]'
      )
    ).click();
  };

  public getDarkModeCheckBox = async () => {
    return await $(`#radio_darkpage`);
  };

  public getDarkCodeCheckBox = async () => {
    return await $(`#radio_darkcode`);
  };

  public scrollToFooter = async () => {
    await (await $(`div.w3-container`)).scrollIntoView();
  };

  public getButtonsInFooter = () =>
    $$(`w3-button w3-white w3-hide-small w3-round w3-hide-medium w3-left`);

  public clickOnButtonInFooterByInnerText = async (item: FOOTER_ITEMS) => {
    await (
      await $(`//div[@class="w3-container w3-padding-32"]//*[text()="${item}"]`)
    ).click();
  };

  public getQuizzesHeaderElement = () => $(`//h1`);

  public waitForPage = async () => {
    await browser.waitUntil(async () => {
      return (await browser.getUrl()) === `${BASE_URL}`;
    });
  };

  public clickOnLoginButton = async () => {
    await (await $('//a[@class="w3-bar-item w3-btn w3-right"]')).click();
  };
}

export const homePage = new HomePage();
