const assert = require('assert');

describe('myFunction', () => {
  it('should return the expected result', () => {
    const result = myFunction();
    assert.equal(result, 'expected result');
  });
});

const { Builder, By, Key, until } = require('selenium-webdriver');

describe('myProduct', () => {
  it('should perform the expected actions', async () => {
    const driver = await new Builder().forBrowser('chrome').build();
    try {
      await driver.get('https://myproduct.com');
      await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
      await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    } finally {
      await driver.quit();
    }
  });
});
