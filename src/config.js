import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import LinkList from "./components/LinkList/LinkList";
import LearningOptions from "./components/LearningOptions/LearningOptions";

const config = {
initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to know about The Growth Company?", {
      widget: "learningOptions",
    }),
  ],
 
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "aboutuslinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Businesess",
            url:
              "https://www.growthco.uk/what-we-do/business/",
            id: 1,
          },
          {
            text: "People",
            url:
              "https://www.growthco.uk/what-we-do/people/",
            id: 2,
          },
          {
            text: "International",
            url: "https://www.growthco.uk/what-we-do/international/",
            id: 3,
          },
          {
            text: "Consulting",
            url: "https://www.growthco.uk/what-we-do/consulting/",
            id: 4,
          },
          
        ],
      },
    },
    {
      widgetName: "worklinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Work with us",
            url:
              "https://www.growthco.uk/work-with-us/",
            id: 1,
          },
         
        ],
      },
    },
    {
      widgetName: "careerlinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Work for us",
            url:
              "https://www.growthco.uk/gc-careers/",
            id: 1,
          },
         
        ],
      },
    },
    {
      widgetName: "newslinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "News",
            url:
              "https://www.growthco.uk/news/",
            id: 1,
          },
         
        ],
      },
    },
    {
      widgetName: "contactlinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Contact Us",
            url:
              "https://www.growthco.uk/contact-us/",
            id: 1,
          },
         
        ],
      },
    },
    
    {
      widgetName: "whatwedolinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Business",
            url:
              "https://www.growthco.uk/what-we-do/business/",
            id: 1,
          },
          {
            text: "People",
            url:
              "https://www.growthco.uk/what-we-do/people/",
            id: 2,
          },
          {
            text: "International",
            url: "https://www.growthco.uk/what-we-do/people/",
            id: 3,
          },
          {
            text: "Consulting",
            url: "https://www.growthco.uk/what-we-do/consulting/",
            id: 4,
          },
          {
            text: "Net Zero",
            url: "https://www.growthco.uk/what-we-do/net-zero/",
            id: 5,
          },
          {
            text: "GC Business Survey",
            url: "https://www.growthco.uk/what-we-do/gc-business-survey/",
            id: 5,
          },
          {
            text: "Where we work",
            url: "https://www.growthco.uk/what-we-do/where-we-work/",
            id: 6,
          },
        ],
      },
    },
  ],
};

export default config