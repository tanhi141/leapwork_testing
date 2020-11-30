const { I, commonAction , chatsMobilePage} = inject();

module.exports = {
  onAcionLater() {
    if (commonAction.isContaintElement(chatMobilePage.chats.laterButton)) {
      commonAction.onTapButton(chatMobilePage.chats.laterButton);
    }
  },

  startChat() {
    I.waitForElement(chatMobilePage.chats.createChatDropdownButton, 60);
    commonAction.onTapButton(chatMobilePage.chats.createChatDropdownButton);
    commonAction.onTapButton(chatMobilePage.chats.create1_1ChatButton);
  },
}
