const { I, commonAction , chatsMobilePage} = inject();

module.exports = {
  onAcionLater() {
    if (commonAction.isContaintElement(chatsMobilePage.chats.laterButton)) {
      commonAction.onTapButton(chatsMobilePage.chats.laterButton);
    }
  },

  startChat() {
    I.waitForElement(chatsMobilePage.chats.createChatDropdownButton, 60);
    commonAction.onTapButton(chatsMobilePage.chats.createChatDropdownButton);
    commonAction.onTapButton(chatsMobilePage.chats.create1_1ChatButton);
    commonAction.onTapButton(chatsMobilePage.chats.teamButton);
    //commonAction.onTapButton(chatsMobilePage.chats.firstItemOfListChat);
    I.waitForElement(chatsMobilePage.chats.createChatDropdownButton, 30);
    commonAction.onTapButton(chatsMobilePage.chats.attachmentButton);
  },
}
