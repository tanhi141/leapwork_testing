const { I } = inject();

module.exports = {
  chats: {
  //laterButton: '//android.widget.Button[@resource-id=\"android:id/button1\"]',
  createChatDropdownButton: '//android.view.ViewGroup[@content-desc=\"chat_newChat\"]/android.widget.TextView',
  create1_1ChatButton: '//android.view.ViewGroup[@content-desc=\"chat_createDirectChat\"]',
  teamButton: '//android.view.ViewGroup[@content-desc=\"contact_tab_teams\"]',
  firstItemOfListChat: '(//*[@class="android.widget.TextView" and @text="01, Thao"])[0]',
  attachmentButton: '//android.view.ViewGroup[@content-desc="chatDetail_attach"]/android.widget.TextView',
  },
  
}