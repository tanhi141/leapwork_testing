const { I } = inject();


module.exports = {
  //Nhiiii
  onTapButton(xpath) {
    I.waitForElement(xpath, 30);
    I.tap(xpath);
  },

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
  press(x,y){
    I.touchPerform([{
      action: 'press',
      options: {
        x: x,
        y: y
      }
  }, {action: 'release'}])
  },

  
  ///WEB
  inputToTextboxByPlaceholder(xpath, value, ...args) {
    xpath = this.formatXpath(xpath, ...args);
    I.waitForElement(xpath, 30);
    I.fillField(xpath, value);
  },

  clickToButtonByNameButton(xpath, ...args) {
    I.waitForElement(xpath, 30);
    I.click(xpath);
  },

}
