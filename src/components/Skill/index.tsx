import Page from "@/components/PageTemplate";
import { NavLink } from "@/components/atom/nav";
import Footer from "@/components/Home/Footer";
import SkillCardList from "@/components/Skill/CardList";
import data from "./data.json";

const Skill = () => {
  return (
    <Page>
      <Page.Title>Skill</Page.Title>
      <Page.TitleNav>
        <NavLink />
      </Page.TitleNav>
      <Page.Content>
        <SkillCardList skills={data} />
      </Page.Content>
      <Footer />
    </Page>
  );
};

export default Skill;
