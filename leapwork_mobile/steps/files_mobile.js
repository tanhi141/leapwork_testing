const { I, commonAction , filesMobilePage} = inject();

module.exports = {
  onAcionLater() {
    if (commonAction.isContaintElement(chatsMobilePage.chats.laterButton)) {
      commonAction.onTapButton(chatsMobilePage.chats.laterButton);
    }
  },

  selectFiles() {
    I.waitForElement(filesMobilePage.files.fileOption, 30);
    commonAction.onTapButton(filesMobilePage.files.fileOption);
    //I.waitForElement(filesMobilePage.files.allowOption, 30);
    //commonAction.onTapButton(filesMobilePage.files.allowOption);
    commonAction.press(328,996);
    I.waitForElement(filesMobilePage.files.sendButon, 30);
    commonAction.onTapButton(filesMobilePage.files.sendButon);
    I.wait(10);
    I.seeElement(filesMobilePage.files.fileUploaded);
  },
  
  
}