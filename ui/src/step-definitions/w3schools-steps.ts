import { Given, Then, When } from '@wdio/cucumber-framework';
import { homePage } from '../pageObjects/homePage';
import { LOGIN, PASSWORD } from '../support/constants';
import { loginPage } from '../pageObjects/loginPage';
import { FOOTER_ITEMS } from '../support/types';

Given(/^the User opens web page (.+)$/, async (webAddress) => {
  await browser.url(webAddress);
});
// When(
//   /^the User clicks on the 'Accept all & visit the site' button$/,
//   async () => {
//     await homePage.clickOnAcceptAllButton();
//   }
// );
When(/^the User clicks on the 'Change Theme' button$/, async () => {
  await homePage.clickOnChangeThemeButton();
});
Then(
  /^the User sees that the dark mode and dark code checkboxes are enabled$/,
  async () => {
    const radioDarkMode = await homePage.getDarkMode();
    const radioDarkCode = await homePage.getDarkCode();
    expect(radioDarkMode).toBeChecked;
    expect(radioDarkCode).toBeChecked;
  }
);

When(/^the User scrolls to the Footer$/, async () => {
  await homePage.scrollToFooter();
});
Then(
  /^the User sees that the button (.+) contains (.+)$/,
  async (index, text) => {
    const button = await homePage.getButtonsInFooter();
    expect(button[index - 1]).toHaveText(text);
  }
);

When(/^the User clicks on the 'Quizzes' button$/, async () => {
  await homePage.clickOnButtonInFooterByInnerText(FOOTER_ITEMS.QUIZZES);
});
Then(
  /^the User sees the page title (.+)$/,
  async (quizzesHeaderElement: string) => {
    const searchTitle = await homePage.getQuizzesHeaderElement();
    expect(searchTitle).toHaveText(quizzesHeaderElement);
  }
);

When(
  /^the User clicks the 'Click to go back' arrow in the browser window$/,
  async () => {
    await browser.back();
  }
);
Then(/^the User sees the Home page is displayed$/, async () => {
  await homePage.waitForPage();
});

When(/^the User clicks the login button$/, async () => {
  await homePage.clickOnLoginButton();
});
Then(/^the User is redirected to the login page$/, async () => {
  await loginPage.waitForPage();
});

When(/^the User logs in with credantials$/, async () => {
  await loginPage.performLogin(LOGIN, PASSWORD);
});
Then(/^the User is redirected to the My learning page/, async () => {
  expect(browser).toHaveTitle('My learning | W3Schools');
});

When(/^the User clicks on the 'Continue Learn SQL' button$/, async () => {
  await loginPage.clickOnContinueLearnSQLButton();
});
Then(
  /^the User sees that the page with the title '(.+)' is displayed$/,
  async (headerElement: string) => {
    const searchHeaderElement = await loginPage.getPageHeader();
    expect(searchHeaderElement).toHaveText(headerElement);
  }
);
