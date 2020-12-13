const { I , constant} = inject();

module.exports = {
  onTapButton(xpath) {
    I.waitForElement(xpath, 10);
    I.tap(xpath);
  },

  inputText(text, xpath) {
    I.waitForElement(xpath, 30);
    I.fillField(xpath, text);
  },

  isContaintElement(xpath) {
    I.waitForElement(xpath, 60);
    let value =  I.grabNumberOfVisibleElements(xpath);
    return value
  },

  press(){
    I.touchPerform([{
      action: 'press',
      options: {
        x: 500,
        y: 1027
      }
  }, {action: 'release'}])
  }
  //256 1114

}
