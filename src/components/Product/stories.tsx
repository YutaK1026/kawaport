import Product from ".";

const meta = {
  title: "Product",
  component: Product,
};

export default meta;

export const Default = () => {
  return <Product />;
};
Default.storyName = "Product";
