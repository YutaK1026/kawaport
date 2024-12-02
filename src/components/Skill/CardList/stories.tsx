import LanguageSkillCardList from ".";
import data from "./data.json";
const meta = {
  title: "LanguageSkillCardList",
  component: LanguageSkillCardList,
};

export default meta;

export const Default = () => {
  return <LanguageSkillCardList skills={data} />;
};
Default.storyName = "LanguageSkillCardList";
