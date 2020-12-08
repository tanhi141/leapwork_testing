const { I, commonAction, sendImageMobilePage} = inject();

module.exports = {
  onAcionLater() {
    if (commonAction.isContaintElement(sendImageMobilePage.updateAlert.laterButton) != 0) {
      console.log('trueeee');
      commonAction.onTapButton(sendImageMobilePage.updateAlert.laterButton);
    } else {
      console.log('falseee');
    }
  },

  startChat() {
    console.log('strat chatttt');
    I.waitForElement(sendImageMobilePage.chats.createChatDropdownButton, 120);
    commonAction.onTapButton(sendImageMobilePage.chats.createChatDropdownButton);
    commonAction.onTapButton(sendImageMobilePage.chats.create1_1ChatButton);
    commonAction.onTapButton(sendImageMobilePage.chats.teamButton);
    //correct

    commonAction.onTapButton(sendImageMobilePage.sendImage.getXpathItemChat(3));
    commonAction.onTapButton(sendImageMobilePage.listOption.bottomTab_contact);

  },

  chatTeam() {
    // this.onAcionLater();
    this.startChat();
    
  },
  
}
