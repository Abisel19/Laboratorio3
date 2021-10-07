const {Given, When, Then, setDefaultTimeout} = require('cucumber');
const {Builder, By, until} = require('selenium-webdriver');
require('chromedriver');
const assert=require('assert');
setDefaultTimeout(60 * 1000);

         Given('I am on the {string} page', async function (string) {
          this.driver = new Builder()
          .forBrowser('chrome')
          .build();
          await this.driver.get(`https://the-internet.herokuapp.com/${string}`);
          });
         

         When('I loguin with {string} and {string}', function (string, string2) {
           this.driver.findElement(By.id("username")).sendKeys(string);
           this.driver.findElement(By.id("password")).sendKeys(string2);
           this.driver.findElement(By.className("radius")).click();
         });
     

         Then('I should see message saying {string}', async function (string) {
           await this.driver.wait(until.elementLocated(By.id("flash")));
           let message= await this.driver.findElement(By.id("flash")).getText();
           assert.equal(string, message.substring(0, message.indexOf("!")+1));
         });