const { I, commonAction, chatsMobilePage, photoAndVideoPage} = inject();

module.exports = {
  onAcionLater() {
    if (commonAction.isContaintElement(chatsMobilePage.chats.laterButton)) {
      commonAction.onTapButton(chatsMobilePage.chats.laterButton);
    }
  },

  selectPhotoAndVideo() {
    I.waitForElement(chatsMobilePage.chats.attachmentButton, 30);
    commonAction.onTapButton(chatsMobilePage.chats.attachmentButton);
    I.waitForElement(photoAndVideoPage.photoAndVideo.photoAndVideoOption, 30);
    commonAction.onTapButton(photoAndVideoPage.photoAndVideo.photoAndVideoOption);
    I.wait(10);
    //I.waitForElement(photoAndVideoPage.photoAndVideo.allowOption, 30);
    //commonAction.onTapButton(photoAndVideoPage.photoAndVideo.allowOption);
    commonAction.press(298,1111);
    I.waitForElement(photoAndVideoPage.photoAndVideo.sendButon, 30);
    commonAction.onTapButton(photoAndVideoPage.photoAndVideo.sendButon);
    I.wait(10);
    I.seeElement(photoAndVideoPage.photoAndVideo.fileUploaded);
  },
}

