import LanguageSkillCard from ".";

const meta = {
  title: "LanguageSkillCard",
  component: LanguageSkillCard,
};

export default meta;

const data = {
  imgSrc: "@/public/skill/python.png",
  name: "Python",
  description: "Pythonの説明を書く。",
  period: "3 years",
};

export const Default = () => {
  return <LanguageSkillCard props={data} />;
};
Default.storyName = "LanguageSkillCard";
