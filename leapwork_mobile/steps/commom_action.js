const { I , constant} = inject();


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
    I.waitForElement(xpath, 60);
    let value =  I.grabNumberOfVisibleElements(xpath);
    return value
  },



  //Ngaaaaaa
}
