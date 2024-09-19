import Button from ".";

const meta = {
  title: "Button",
  component: Button,
};

export default meta;

export const Default = () => {
  return <Button content="本文を記述" path="" />;
};
Default.storyName = "Button";
