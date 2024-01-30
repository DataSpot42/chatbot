class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    handleAboutUs = () => {
      const message = this.createChatBotMessage(
        "Our journey began in Manchester over 30 years ago. Since then, we've helped to generate hundreds of millions of pounds of investment, helped to upskill and place hundreds of thousands of people into work or progress their careers. Here are some links with more information about the Growth Company",
        {
          widget: "aboutuslinks",
        }
      );
  
      this.updateChatbotState(message);
    };
    handleWhatWeDo = () => {
      const message = this.createChatBotMessage(
        "We are an award-winning social enterprise with a mission to enable growth, create jobs and improve lives. Here is some more information",
        {
          widget: "whatwedolinks",
        }
      );
  
      this.updateChatbotState(message);
    };
    handleNews = () => {
      const message = this.createChatBotMessage(
        "Over 350 Manchester residents gain new skills in green technology. 351 Greater Manchester residents have gained new skills in green technologies through programmes delivered at our Green Skills Academy.  For more news click on this link",
        {
          widget: "newslinks",
        }
      );
      this.updateChatbotState(message);
      };  
    handleContact = () => {
      const message = this.createChatBotMessage(
        "To find out more about the Growth Company and our services, get in touch by clicking on the link below",
        {
          widget: "contactlinks",
        }
      );
  
      this.updateChatbotState(message);
    };
    handleWork = () => {
      const message = this.createChatBotMessage(
        "We work with a wide range of partners from national government to local institutions, multi-national private partners to specialist providers, from cities to towns. We have a strong track record of working collaboratively and sharing our expertise to deliver inclusive support and sustainable growth that delivers real impact. For more information click below",
        {
          widget: "worklinks",
        }
      );
      this.updateChatbotState(message);
    };
    handleCareer = () => {
      const message = this.createChatBotMessage(
        "If you want a rewarding career where you’ll have the opportunity to make a real difference, you’ve come to the right place.",
        {
          widget: "careerlinks",
        }
      );
      this.updateChatbotState(message);
    };

    handleGreet = () => {
        const message = this.createChatBotMessage(
          "Hello to you too, hope you are well",
          
        );
    
        this.updateChatbotState(message);
      };
  
    updateChatbotState(message) {
      // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.
  
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    }
  }
  
  export default ActionProvider;