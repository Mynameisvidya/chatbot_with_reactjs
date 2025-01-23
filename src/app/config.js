import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "AgriBot Advisor",
  initialMessages: [
    createChatBotMessage(
      "Hi I'm your Agriculture Advisor. How can I help you?"
    )
  ],
  customComponents: {
    botAvatar: (props) => (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI_A5Wpa9ff7Ote5arkGDkrPs6PYo2HQigTQ&s"
        alt="Bot Logo"
        style={{ width: "35px", height: "35px", borderRadius: "50%" }}
      />
    ),
    userAvatar: (props) => (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTasXxgZqMMku1Z6skCRKmJLGA0iMpx6L4tCA&s"
        alt="User Logo"
        style={{ width: "35px", height: "35px", borderRadius: "50%" }}
      />
    ),
  },
};

export default config;
