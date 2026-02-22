// data/landing.js
import { DollarSign, BarChart, CreditCard, LayoutDashboard, BrainCircuit, BookOpen, UserCheck, Zap, Bot, Milestone, Video, Book, UserIcon } from "lucide-react";


const iconProps = {
  size: 32,
  strokeWidth: 1.5,
  className: "text-blue-400"
};

const smallIconProps = {
  size: 24,
  strokeWidth: 1.5,
  className: "text-blue-400"
};

export const featuresData = [
  {
    icon: <BrainCircuit {...iconProps} />,
    title: "AI Course Generation",
    description: "Automatically create course outlines, content, and quizzes using our advanced AI.",
  },
  {
    icon: <LayoutDashboard {...iconProps} />,
    title: "Intuitive Dashboard",
    description: "Manage your students, courses, and learn efficiently.",
  },
  {
    icon: <Video {...iconProps} />,
    title: "Interactive Video",
    description: "You can even learn from Youtube videos recommended by AI.",
  },
  {
    icon: <Bot {...iconProps} />,
    title: "AI Course Content Generation",
    description: "Efficiently generate the Content related to generated Course",
  },
  {
    icon: <Book {...iconProps} />,
    title: "Enroll the Course",
    description: "Enroll the course for learning and utilize notes provided by AI.",
  },
  {
    icon: <UserIcon {...iconProps} />,
    title: "Profile Management",
    description: "Monitor, manage and update your profile as per your needs.",
  },
];


export const howItWorksData = [
  {
    icon: <Milestone {...smallIconProps} />,
    title: "1. Create Your Course",
    description: "Use our AI generator or manually build your course with our rich content editor.",
  },
  {
    icon: <Bot {...smallIconProps} />,
    title: "2. Create Content for course",
    description: "Generate highly helpful and efficient course contents with AI notes and youtube vide recommendations",
  },
  {
    icon: <BookOpen {...smallIconProps} />,
    title: "3. Start Learning",
    description: "Start Learning new Tech skills today",
  },
];

