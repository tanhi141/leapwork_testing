const { I } = inject();

module.exports = {
  chats: {
  //laterButton: '//android.widget.Button[@resource-id=\"android:id/button1\"]',
  createChatDropdownButton: '//android.view.ViewGroup[@content-desc=\"chat_newChat\"]/android.widget.TextView',
  create1_1ChatButton: '//android.view.ViewGroup[@content-desc=\"chat_createDirectChat\"]',
  teamButton: '//android.view.ViewGroup[@content-desc=\"contact_tab_teams\"]',
  firstItemOfListChat: '//*[@bounds="[242,1610][1080,1653]" and @text="automation_auto_30"]',
  attachmentButton: '//android.view.ViewGroup[@content-desc="chatDetail_attach"]/android.widget.TextView'
  },
  
}
