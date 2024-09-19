import Page from "@/components/template/page-template";
import { NavLink } from "@/components/organisms/header/atom/nav";
import Footer from "@/components/organisms/footer";
import styles from "./skill.module.scss";
import SkillCardList from "@/components/molecules/skill-card-list";
import data from "./data.json";

const Skill = () => {
  return (
    // <div className={styles.background}>
    <Page>
      <Page.Title>About</Page.Title>
      <Page.TitleNav>
        <NavLink />
      </Page.TitleNav>
      <Page.Content>
        <SkillCardList skills={data} />
      </Page.Content>
      <Footer />
    </Page>
    // </div>
  );
};

export default Skill;
