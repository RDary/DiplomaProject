export class BasePage {
  get currentUrl() {
    return browser.getUrl();
  }
}
