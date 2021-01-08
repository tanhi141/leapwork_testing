const commonLocator = require("../pages/commonLocator");

const { I , GetCodePage, commonLocatorPage,commonAction} = inject();

module.exports = {
  get_Code() {
    I.waitForElement(GetCodePage.getCode.userButton,30);
    commonAction.clickToButton(GetCodePage.getCode.userButton);
    commonAction.clickToButton(GetCodePage.getCode.deviceButton);
    commonAction.clickToButton(GetCodePage.getCode.linkDevicesButton);
    commonAction.getCode(GetCodePage.getCode.codeTextbox);
    let pin =  I.grabTextFrom(GetCodePage.getCode.codeTextbox);
    console.log(pin);
  },
  
}
