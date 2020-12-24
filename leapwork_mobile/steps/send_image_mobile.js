const { I, commonAction, sendImageMobilePage, chatsMobilePage} = inject();

module.exports = {
  sendImage() {
    I.waitForElement(chatsMobilePage.chats.attachmentButton, 30);
    commonAction.onTapButton(chatsMobilePage.chats.attachmentButton); 
    I.waitForElement(sendImageMobilePage.listOption.cameraButton, 30);
    commonAction.onTapButton(sendImageMobilePage.listOption.cameraButton);
    commonAction.onTapButton(sendImageMobilePage.sendImageAndVideo.enterButton);
    commonAction.onTapButton(sendImageMobilePage.sendImageAndVideo.doneButton);
    commonAction.onTapButton(sendImageMobilePage.sendImageAndVideo.sendButton);
  },

  sendVideo() {
    commonAction.onTapButton(sendImageMobilePage.listOption.recordButton);
    commonAction.onTapButton(sendImageMobilePage.sendImageAndVideo.enterButton);
    I.wait(5);
    commonAction.onTapButton(sendImageMobilePage.sendImageAndVideo.enterButton);
    commonAction.onTapButton(sendImageMobilePage.sendImageAndVideo.doneButton);
    commonAction.onTapButton(sendImageMobilePage.sendImageAndVideo.sendButton);
  },

  chatTeam_sendImage() {
    this.sendImage();
    //this.sendVideo();
  }
  
}
