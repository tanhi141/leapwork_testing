const { I } = inject();

module.exports = {
  updateAlert: {
    laterButton: '//android.widget.Button[@resource-id=\"android:id/button1\"]',
  },

  chats: {
    createChatDropdownButton: '//android.view.ViewGroup[@content-desc=\"chat_newChat\"]',
    create1_1ChatButton: '//android.view.ViewGroup[@content-desc=\"chat_createDirectChat\"]',
    teamButton: '//android.view.ViewGroup[@content-desc=\"contact_tab_teams\"]',
    firstItemOfListChat: '//*[@class="android.widget.TextView" and @text="01, Thao"]',
  },

  //get item in list chat - Right
  sendImage: {
    baseChatItem: '//android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[',

    getXpathItemChat(index) {
      let value = this.baseChatItem + String(index) + ']';
      console.log(value);
      return value;
    },
  },
  
  //maybe wrong
  listOption: {
    cameraButton: '//android.view.ViewGroup[@content-desc=\"chatDetail_camera\"]', 
    photosAndVideoButton: '//android.view.ViewGroup[@content-desc=\"chatDetail_sendPhoto\"]', 
    fileButton: '//android.view.ViewGroup[@content-desc=\"chatDetail_sendFile\"]',
    cancelButton: '//android.view.ViewGroup[@content-desc=\"cancel\"]',
  },

  inputChatArea: {
    bottomTab_chat: '//android.view.ViewGroup[@content-desc=\"bottomTab_chat\"]', 
    bottomTab_contact: '//android.view.ViewGroup[@content-desc=\"bottomTab_contact\"]',
    bottomTab_notification: '//android.view.ViewGroup[@content-desc=\"bottomTab_notification\"]', 
    bottomTab_settings: '//android.view.ViewGroup[@content-desc=\"bottomTab_settings\"]', 
  },

  sendImageAndVideo: {
    acceptCamera: '//android.widget.Button[@resource-id=\"com.android.packageinstaller:id/permission_allow_button\"]',
    

  },
}