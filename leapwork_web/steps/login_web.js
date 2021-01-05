const commonLocator = require("../pages/commonLocator");

const { I , LoginPage, commonLocatorPage,commonAction} = inject();

module.exports = {
  login_web() {    
    I.amOnPage('/login');
    I.waitForText('Login', 10);
    commonAction.inputText("auto_testing", LoginPage.login.companyTextbox);
    commonAction.clickToButtonByNameButton(commonLocatorPage.DYNAMIC_BUTTON,"Next");
    //commonAction.clickToButton(LoginPage.login.nextButton);
    I.waitForText("Forgot password",30);
    commonAction.inputToTextboxByPlaceholder(commonLocatorPage.DYNAMIC_TEXTBOX,"abc","Username");
    commonAction.inputToTextboxByPlaceholder(commonLocatorPage.DYNAMIC_TEXTBOX,"abc","Password",);
    commonAction.clickToButtonByNameButton(commonLocatorPage.DYNAMIC_BUTTON,"Login");
  },
  
  
}
