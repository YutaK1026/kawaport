import ProductDetailPage from "@/components/template/product-detail-template";
import productImage from "@/public/project/jackFesOP.png";
import data from "./product.json";

const jackFesOP = () => {
  return (
    <ProductDetailPage>
      <ProductDetailPage.ProductImage img={productImage} />
      <ProductDetailPage.Title>{data.title}</ProductDetailPage.Title>
      <ProductDetailPage.Content
        leftContent={
          <ProductDetailPage.LeftContent
            skill_stack={data.skill_stack}
            member={data.member}
            period={data.period}
            github_url={data.github_url}
          />
        }
        rightContent={
          <ProductDetailPage.RightContent
            content={data.content}
            content__point={data.content__point}
          />
        }
      />
    </ProductDetailPage>
  );
};

export default jackFesOP;
