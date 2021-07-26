import { createChatBotMessage } from "react-chatbot-kit";
import React from "react";
import LinkList from './components/LinkList.jsx';
import Image from './components/Image.jsx';
import YoutubeEmbed from './components/YoutubeEmbed.js';
import './components/styles.css';


const config = {
    botName: "Q2 Assistant",
    initialMessages: [
        createChatBotMessage(`Hi, I'm the Quadrant 2 assistant. What can I help you with? 
        You can ask for things like: "I need help with my app", or "I'm looking for contact information."`,
     )],
    customStyles: {
        botMessageBox: {
            backgroundColor: "#FFA500",
        },
        chatButton: {
            backgroundColor: "#add8e6",
        },
    },
    customComponents: {
      //botAvatar: (props) => <Image {...props} />
    },

    widgets: [
        {
            widgetName: "didIhelpWidget",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                  {
                    text: "My problem is solved",
                    url:
                   "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
                    id: 1,
                  },
                  {
                    text: "My problem is not solved",
                    url:
                    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
                    id: 2,
                  },
                  {
                    text: "I want to speak with someone",
                    url:
                    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
                    id: 3,
                  },
                ],
              },
          },
          {
            widgetName: "postLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                  {
                    text: "Quadrant 2 Website",
                    url:
                   "https://quadrant2.us/",
                    id: 1,
                  },
                  {
                    text: "About Us",
                    url:
                    "https://quadrant2.us/about_us.html",
                    id: 2,
                  },
                  {
                    text: "Contact Us",
                    url:
                    "https://quadrant2.us/contact.html",
                    id: 3,
                  },
                ],
              },
          },
          {
            widgetName: "imageWidget",
            widgetFunc: () => <Image />

          },
          {
            widgetName: "youtubeEmbed",
            widgetFunc: () => <YoutubeEmbed embedId="U1M-tLoiJ4s" />

          },
    ],
}

export default config