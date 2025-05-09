import ProductCard from ".";

const meta = {
  title: "ProductCard",
  component: ProductCard,
};

export default meta;

export const Default = () => {
  return (
    <ProductCard
      tagList={["個人開発", "Webアプリ", "Webアプリ"]}
      title="タイトル"
      imageSrc="/project/code_duel.png"
      link="/"
    />
  );
};
Default.storyName = "ProductCard";
