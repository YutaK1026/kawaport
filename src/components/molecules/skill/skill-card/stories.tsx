import SkillCard from ".";
import python from "@/public/skill/python.png";

const meta = {
  title: "SkillCards",
  component: SkillCard,
};

const data = [
  {
    src: python,
    description: "pythonです",
    exp: "5年〜",
  },
];

export default meta;

export const Default = () => {
  return <SkillCard skills={data} />;
};
Default.storyName = "SkillCards";
