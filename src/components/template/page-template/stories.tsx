import PageTemplate from ".";
import { NavLink } from "@/components/organisms/header/atom/nav";

const meta = {
  title: "PageTemplate",
  component: PageTemplate,
};

export default meta;

export const Default = () => {
  return (
    <PageTemplate>
      <PageTemplate.Title>タイトル</PageTemplate.Title>
      <PageTemplate.TitleNav>ナビゲーションを設定</PageTemplate.TitleNav>
      <PageTemplate.Content>ここに文章を記述</PageTemplate.Content>
    </PageTemplate>
  );
};
Default.storyName = "PageTemplate";

export const About = () => {
  return (
    <PageTemplate>
      <PageTemplate.Title>About</PageTemplate.Title>
      <PageTemplate.TitleNav>
        <NavLink />
      </PageTemplate.TitleNav>
      <PageTemplate.Content>
        <PageTemplate.SubTitle>サブタイトル</PageTemplate.SubTitle>
        <PageTemplate.SubContent>ここに文章を記述</PageTemplate.SubContent>

        <PageTemplate.SubTitle>サブタイトル</PageTemplate.SubTitle>
        <PageTemplate.SubContent>ここに文章を記述</PageTemplate.SubContent>
      </PageTemplate.Content>
    </PageTemplate>
  );
};
About.storyName = "PageTemplate";
