const { I, commonAction , chatsMobilePage} = inject();

module.exports = {
  // onAcionLater() {
  //   if (commonAction.isContaintElement(chatMobilePage.chats.laterButton)) {
  //     commonAction.onTapButton(chatMobilePage.chats.laterButton);
  //   } else {
  //     console.log('false')
  //   if (commonAction.isContaintElement(chatsMobilePage.chats.laterButton)) {
  //     commonAction.onTapButton(chatsMobilePage.chats.laterButton);
  //   }
  // },

  startChat() {
    I.waitForElement(chatsMobilePage.chats.createChatDropdownButton, 40);
    commonAction.onTapButton(chatsMobilePage.chats.createChatDropdownButton);
    commonAction.onTapButton(chatsMobilePage.chats.create1_1ChatButton);
    commonAction.onTapButton(chatsMobilePage.chats.teamButton);
    // commonAction.onTapButton(chatsMobilePage.chats.firstItemOfListChat);
    commonAction.onTapButton(sendima);
    commonAction.onTapButton(chatsMobilePage.chats.attachmentButton);
  },
}
