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

    commonAction.onTapButton(sendImageMobilePage.sendImage.getXpathItemChat(3));

    commonAction.inputText('text', sendImageMobilePage.inputChatArea.inputMessageTextField);

    commonAction.onTapButton(sendImageMobilePage.inputChatArea.attachButton);

   
  },

  sendImage() {
    commonAction.onTapButton(sendImageMobilePage.listOption.cameraButton);

    commonAction.onTapButton(sendImageMobilePage.sendImageAndVideo.enterButton);

    commonAction.onTapButton(sendImageMobilePage.sendImageAndVideo.doneButton);

    commonAction.onTapButton(sendImageMobilePage.sendImageAndVideo.sendButton);
  },

  sendVideo() {
    commonAction.onTapButton(sendImageMobilePage.listOption.recordButton);

    commonAction.onTapButton(sendImageMobilePage.sendImageAndVideo.enterButton);

    I.wait(5)

    commonAction.onTapButton(sendImageMobilePage.sendImageAndVideo.enterButton);

    commonAction.onTapButton(sendImageMobilePage.sendImageAndVideo.doneButton);

    commonAction.onTapButton(sendImageMobilePage.sendImageAndVideo.sendButton);
  },

  chatTeam_sendImage() {
    this.startChat();
    this.sendImage()
  },

  // chatTeam_sendVideo() {
  //   this.startChat();
  //   this.sendVideo()
  // },
  
}
