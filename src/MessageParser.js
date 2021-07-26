class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }


    parse(message) {
      const lowerCaseMessage = message.toLowerCase()
      
      const tree = {
        askingForHelp: false

        //This property seems to refresh every time a message is returned
    }

      if (lowerCaseMessage.includes("app") || lowerCaseMessage.includes("download")) {
        if (lowerCaseMessage.includes("where")){
          this.actionProvider.showAppDownloads();
          setTimeout(() => { this.actionProvider.placeholder(); }, 1200);
        }
        else{
          this.actionProvider.appHelp();
        } 
        
      }

      if (lowerCaseMessage.includes("contact") || lowerCaseMessage.includes("phone") || lowerCaseMessage.includes("person")) {
        this.actionProvider.contactLink()
        setTimeout(() => { this.actionProvider.provideContactInformation(); }, 2000);
        setTimeout(() => { this.actionProvider.provideEmailInformation(); }, 4000);
        setTimeout(() => { this.actionProvider.solveProblem(); }, 6000);
        // ^^^THIS WORKS FOR DELAYING SUBSEQUENT MESSAGES^^^
        


      }

      if (lowerCaseMessage.includes("yes")){
        this.actionProvider.handleDidIHelpList();
      }

      if (lowerCaseMessage.includes("more help")){
        this.actionProvider.moreHelp();
      }

      if (lowerCaseMessage.includes("bye")) {
        this.actionProvider.bye()
      }

      if (lowerCaseMessage.includes("image")) {
        this.actionProvider.handleImage()
      }

      if (lowerCaseMessage.includes("youtube")) {
        this.actionProvider.handleYoutube()
      }

      if (lowerCaseMessage.includes("link")) {
        this.actionProvider.handleShowMeLinks()
      }

    }
  }
  
  export default MessageParser