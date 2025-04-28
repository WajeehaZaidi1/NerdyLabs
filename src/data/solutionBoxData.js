import genAI from "../animations/ai-sparkle.json";
import webDev from "../animations/mobile-web-design.json";
import chatbot from "../animations/devops.json";
import analytics from "../animations/Web application security.json";
import ml from "../animations/programming.json";
import cloud from "../animations/devops.json";
import automation from "../animations/software-development.json";
import mobile from "../animations/mobile-development.json";
import design from "../animations/uxui.json";
import api from "../animations/Web application security.json";

// Image Imports (assuming they're in src/assets)
import bgGenAI from "../assets/Gen AI .png";
import bgWeb from "../assets/Web.png";
import bgChatbot from "../assets/chat-bot.png";
import bgAnalytics from "../assets/analytics.png";
import bgML from "../assets/Sioftware Background.png";
import bgCloud from "../assets/cloud-network.png";
import bgAutomation from "../assets/automation.png";
import bgMobile from "../assets/Box Mobile AR.png";
import bgDesign from "../assets/graphic-design.png";
import bgAPI from "../assets/e-commerce.png";

const boxes = [
  {
    title: "Generative AI",
    description: "Create content, code, and designs with Gen AI.",
    linkText: "Discover",
    animation: genAI,
    backgroundImage: bgGenAI,
  },
  {
    title: "Web Development",
    description: "Full-stack scalable web applications.",
    linkText: "Discover",
    animation: webDev,
    backgroundImage: bgWeb,
  },
  {
    title: "AI Chatbots",
    description: "Intelligent assistants for your business.",
    linkText: "Discover",
    animation: chatbot,
    backgroundImage: bgChatbot,
  },
  {
    title: "Data Analytics",
    description: "Visualize and interpret data trends.",
    linkText: "Discover",
    animation: analytics,
    backgroundImage: bgAnalytics,
  },
  {
    title: "Machine Learning",
    description: "Automate decisions using ML models.",
    linkText: "Discover",
    animation: ml,
    backgroundImage: bgML,
  },
  {
    title: "Cloud Solutions",
    description: "Deploy scalable cloud-based apps.",
    linkText: "Discover",
    animation: cloud,
    backgroundImage: bgCloud,
  },
  {
    title: "Automation Tools",
    description: "Save time with AI-powered automation.",
    linkText: "Discover",
    animation: automation,
    backgroundImage: bgAutomation,
  },
  {
    title: "Mobile Apps",
    description: "Cross-platform mobile development.",
    linkText: "Discover",
    animation: mobile,
    backgroundImage: bgMobile,
  },
  {
    title: "UI/UX Design",
    description: "Beautiful and intuitive interface design.",
    linkText: "Discover",
    animation: design,
    backgroundImage: bgDesign,
  },
  {
    title: "API Integration",
    description: "Connect systems with modern APIs.",
    linkText: "Discover",
    animation: api,
    backgroundImage: bgAPI,
  },
];

export default boxes;
