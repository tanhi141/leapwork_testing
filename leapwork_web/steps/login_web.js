const commonLocator = require("../pages/commonLocator");

const { I , LoginPage, commonLocatorPage,commonAction} = inject();

module.exports = {
  login_web() {    
    I.amOnPage('/login');
    I.waitForText('Login', 10);
    commonAction.inputText("auto_testing", LoginPage.login.companyTextbox);
    commonAction.clickToButton(LoginPage.login.nextButton);
    commonAction.inputText("automation_auto_26",LoginPage.login.username);
    commonAction.inputText("Testing@123",LoginPage.login.password);
    commonAction.clickToButton(LoginPage.login.loginBtn);
  },

  enter_code() {    
    commonAction.inputText("1", LoginPage.login.securityCode1);
    commonAction.inputText("1", LoginPage.login.securityCode2);
    commonAction.inputText("1", LoginPage.login.securityCode3);
    commonAction.inputText("1", LoginPage.login.securityCode4);
    commonAction.inputText("1", LoginPage.login.securityCode5);
    commonAction.inputText("1", LoginPage.login.securityCode6);
    //commonAction.clickToButton(LoginPage.login.confirmBtn);
  },
  
  
}
