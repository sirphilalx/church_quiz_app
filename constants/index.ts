import { SidebarLink } from "@/types";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/Announcements",
    label: "Announcements",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/attendance",
    label: "Attendance",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/quiz-app",
    label: "Quiz App",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/blog",
    label: "Blog",
  },
  {
    imgURL: "/assets/icons/user.svg",
    route: "/profile",
    label: "Profile",
  },
  // {
  //   imgURL: "/assets/icons/question.svg",
  //   route: "/ask-question",
  //   label: "Ask a question",
  // },
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};

export const hotNews = [
  {
    id: 1,
    question:
      "Would it be appropriate to point out an error in another paper during a referee report?",
    image: "/assets/icons/chevron-right.svg",
  },
  {
    id: 2,
    question: "How can an airconditioning machine exist?",
    image: "/assets/icons/chevron-right.svg",
  },
  {
    id: 3,
    question: "Interrogated every time crossing UK Border as citizen",
    image: "/assets/icons/chevron-right.svg",
  },
  {
    id: 4,
    question: "Low digit addition generator",
    image: "/assets/icons/chevron-right.svg",
  },
  {
    id: 5,
    question: "What is an example of 3 numbers that do not make up a vector?",
    image: "/assets/icons/chevron-right.svg",
  },
];

export const tags = [
  {
    id: "1",
    tag: "javascript",
    totalQuestions: 20152,
  },
  {
    id: "2",
    tag: "NextJS",
    totalQuestions: 20152,
  },
  {
    id: "3",
    tag: "Reactjs",
    totalQuestions: 20152,
  },
  {
    id: "4",
    tag: "nodejs",
    totalQuestions: 20152,
  },
  {
    id: "5",
    tag: "python",
    totalQuestions: 20152,
  },
  {
    id: "6",
    tag: "microsoft azure",
    totalQuestions: 20152,
  },
  {
    id: "7",
    tag: "postgres sql",
    totalQuestions: 20152,
  },
  {
    id: "8",
    tag: "machine learning",
    totalQuestions: 20152,
  },
];
