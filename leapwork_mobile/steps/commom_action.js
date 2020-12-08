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

  async isContaintElement(xpath) {
    I.wait(30)
    console.log('isContaintElementtttt');

    let value = await I.grabNumberOfVisibleElements(xpath);
    console.log('valueeee');
    console.log(value);
    return value
  },

  // bc742d74-1dda-41e4-877f-fa2274d67efe
  getXpathOfListView(baseXpath, index) {
    I.waitForElement(  )
    let listItem = I.findElement(elementId);
    return listItem[index];
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
