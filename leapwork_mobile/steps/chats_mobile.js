const { I, commonAction , chatsMobilePage} = inject();

module.exports = {
  onAcionLater() {
    if (commonAction.isContaintElement(chatMobilePage.chats.laterButton)) {
      commonAction.onTapButton(chatMobilePage.chats.laterButton);
    } else {
      console.log('false')
    }
  },

  startChat() {
// <<<<<<< HEAD
//     I.waitForElement(chatMobilePage.chats.createChatDropdownButton, 60);
//     commonAction.onTapButton(chatMobilePage.chats.createChatDropdownButton);
//     commonAction.onTapButton(chatMobilePage.chats.create1_1ChatButton);
// =======
    I.waitForElement(chatsMobilePage.chats.createChatDropdownButton, 40);
    commonAction.onTapButton(chatsMobilePage.chats.createChatDropdownButton);
    commonAction.onTapButton(chatsMobilePage.chats.create1_1ChatButton);
    commonAction.onTapButton(chatsMobilePage.chats.teamButton);
    commonAction.onTapButton(chatsMobilePage.chats.firstItemOfListChat);
    //commonAction.longPressElement(242,818);
    I.waitForElement(chatsMobilePage.chats.createChatDropdownButton, 30);
    commonAction.onTapButton(chatsMobilePage.chats.attachmentButton);
// >>>>>>> NgaTester
  },
}
