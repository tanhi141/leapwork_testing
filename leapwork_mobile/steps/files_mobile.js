const { I, commonAction , filesMobilePage} = inject();

module.exports = {
  onAcionLater() {
    if (commonAction.isContaintElement(chatsMobilePage.chats.laterButton)) {
      commonAction.onTapButton(chatsMobilePage.chats.laterButton);
    }
  },

  selectFiles() {
    I.waitForElement(filesMobilePage.files.fileOption, 60);
    commonAction.onTapButton(filesMobilePage.files.fileOption);
    I.waitForElement(filesMobilePage.files.alowButton, 60);
    commonAction.onTapButton(filesMobilePage.files.alowButton);
  },
}
