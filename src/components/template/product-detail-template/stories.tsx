import ProductDetailPageTemplate from ".";
import productImage from "@/public/project/code_duel.png";
import data from "./products.json";

const meta = {
  title: "ProductDetailPageTemplate",
  component: ProductDetailPageTemplate,
};

export default meta;

export const Default = () => {
  return (
    <ProductDetailPageTemplate>
      <ProductDetailPageTemplate.ProductImage img={productImage} />
      <ProductDetailPageTemplate.Title>
        プロダクト名
      </ProductDetailPageTemplate.Title>
      <ProductDetailPageTemplate.Content
        leftContent={<p>左側に表示する文章</p>}
        rightContent={
          <p>右側に表示する文章。右側はより広いスペースを使います。</p>
        }
      />
    </ProductDetailPageTemplate>
  );
};
Default.storyName = "ProductDetailPageTemplate";

export const CODE_DUEL = () => {
  return (
    <ProductDetailPageTemplate>
      <ProductDetailPageTemplate.ProductImage img={productImage} />
      <ProductDetailPageTemplate.Title>
        {data.title}
      </ProductDetailPageTemplate.Title>
      <ProductDetailPageTemplate.Content
        leftContent={
          <ProductDetailPageTemplate.LeftContent
            skill_stack={data.skill_stack}
            member={data.member}
            period={data.period}
            github_url={data.github_url}
            url={data.url}
          />
        }
        rightContent={
          <ProductDetailPageTemplate.RightContent
            content={data.content}
            content__point={data.content__point}
          />
        }
      />
    </ProductDetailPageTemplate>
  );
};
CODE_DUEL.storyName = "ProductDetailPageTemplate";
