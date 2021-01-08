const { I } = inject();


module.exports = {
  
  inputText(text, xpath) {
    I.waitForElement(xpath, 30);
    I.fillField(xpath, text);
  },

  async isContaintElement(xpath) {
    I.wait(30)
    console.log('isContaintElementtttt');
    let value = await I.grabNumberOfVisibleElements(xpath);
    console.log('valueeee');
    console.log(value);
    return value
  },
  
  ///WEB
  inputToTextboxByPlaceholder(xpath, value, ...args) {
    xpath = this.formatXpath(xpath, ...args);
    I.waitForElement(xpath, 30);
    I.fillField(xpath, value);
  },

  clickToButtonByNameButton(xpath, ...args) {
    xpath = this.formatXpath(xpath, ...args);
    I.waitForElement(xpath, 30);
    I.click(xpath);
  },
  clickToButton(xpath) {
    I.waitForElement(xpath, 30);
    I.click(xpath);
  },
  async getCode(xpath) {
    let pin =  I.grabTextFrom(GetCodePage.getCode.codeTextbox);
    console.log(pin);
    console.log("abc");
    return pin;
  },

}
