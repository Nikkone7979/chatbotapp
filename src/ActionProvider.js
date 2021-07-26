import LinkList from './components/LinkList.jsx'

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }

    
    //RESPONSES THAT YIELD A LIST:

      handleDidIHelpList = () => {
        const message = this.createChatBotMessage("Great! Do you need any more help?",
        {
          widget: "didIhelpWidget",
        }

        );
        this.updateChatbotState(message);
      };

      handleShowMeLinks = () => {
        const message = this.createChatBotMessage("Here are some links that you might find helpful: ",
        {
          widget: "postLinks",
        }

        );
        this.updateChatbotState(message);
      };
   

    //---------------------------------------

    //RESPONSE THAT YIELDS AN IMAGE:

    handleImage = () => {
      const message = this.createChatBotMessage("Attempting to post an image: ",
      {
        widget: "imageWidget",
      }

      );
      this.updateChatbotState(message);
    };
 

    //RESPONSE THAT YIELDS A YOUTUBE EMBED:

    handleYoutube = () => {
      const message = this.createChatBotMessage("Attempting to post an embedded youtube video: ", 
      {
        widget: "youtubeEmbed",
      }
      );
      this.updateChatbotState(message);
    }


    //GENERIC RESPONSES:


    bye() {
        const byeMessage = this.createChatBotMessage("Goodbye.")
        this.updateChatbotState(byeMessage)
      }

    solveProblem() {
        const solveProblem = this.createChatBotMessage("Was I able to help solve your problem?")
        this.updateChatbotState(solveProblem)
    }

    moreHelp() {
      const moreHelp = this.createChatBotMessage("What else can I help you with?")
      this.updateChatbotState(moreHelp)
  }

    /*howDidIDo() {
        const howMessage = this.createChatBotMessage("Great! Please tell me, how was your experience today?")
        this.updateChatbotState(howMessage)
        //this.updateChatbotState(ActionProvider.didIHelp) <-- why this no work:::: This didn't work because you needed to use the method createChatBotMessage(...) and pass in a widget, seperated by a comma.
      }*/





    //-------

    //SPECIFIC RESPONSES:

    contactLink(){
      const contactLink = this.createChatBotMessage("If you're looking for contact information, I can help you with that. Here is some information I can provide you: ")
      this.updateChatbotState(contactLink)
      
  }

    provideContactInformation(){
      const provideContactInformation = this.createChatBotMessage("You can call us at 650-713-1211")
      this.updateChatbotState(provideContactInformation)
    }

    provideEmailInformation(){
      const provideEmailInformation = this.createChatBotMessage("You can also reach us by e-mail at invent@quadrant2.us")
      this.updateChatbotState(provideEmailInformation)
    }

    appHelp(){
      const appHelp = this.createChatBotMessage("Sounds like you're having some technical issues with one of our apps. Which app do you need help with?")
      this.updateChatbotState(appHelp)
    }

    showAppDownloads(){
      const appHelp = this.createChatBotMessage("You can download our apps here: ")
      this.updateChatbotState(appHelp)
    }



    //PLACEHOLDER FUNCTION FOR UNFINISHED STUFF:
    placeholder(){
      const placeholder = this.createChatBotMessage("(Unfinished query response)")
      this.updateChatbotState(placeholder)
    }

    updateChatbotState(message) {
        this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message]
        }))
      }
    

  }
  
  export default ActionProvider;
  