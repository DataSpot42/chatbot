class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.handleGreet();
      }
  
      if (lowerCaseMessage.includes("about")) {
        this.actionProvider.handleAboutUs();
      }
      if (lowerCaseMessage.includes("what")) {
        this.actionProvider.handleWhatWeDo();
      }
      if (lowerCaseMessage.includes("work")) {
        this.actionProvider.handleWork();
      }
      if (lowerCaseMessage.includes("news")) {
        this.actionProvider.handleNews();
      }
      if (lowerCaseMessage.includes("contact")) {
        this.actionProvider.handleContact();
      }
      if (lowerCaseMessage.includes("career")) {
        this.actionProvider.handleCareer();
      }



    }
  }
  
  export default MessageParser;
  