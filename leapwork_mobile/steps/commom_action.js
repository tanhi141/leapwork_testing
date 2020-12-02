const { I } = inject();


module.exports = {
  //Nhiiii
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

  //Ngaaaaaa

  longPressElement(xBound,yBound){
    I.touchPerform([{
      action: 'press',
      options: {
        x: xBound,
        y: yBound
      }
  }, {action: 'release'}])
  
  },

}
