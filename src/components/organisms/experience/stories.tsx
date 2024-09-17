import Experiences from ".";
import { Experience } from ".";
import testdata from "./experiences.json";
const meta = {
  title: "Experiences",
  component: Experiences,
};

export default meta;

const data: Experience[] = [
  {
    title: "タイトル",
    content: "本文を記述",
    date: "2024/9 - 2024/10",
  },
  {
    title: "タイトル",
    content: "本文を記述",
    date: "2024/9 - 2024/10",
  },
  {
    title: "タイトル",
    content: "本文を記述",
    date: "2024/9 - 2024/10",
  },
];

export const Default = () => {
  return <Experiences experiences={testdata} />;
};
Default.storyName = "Experiences";
