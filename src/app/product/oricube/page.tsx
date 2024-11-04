import ProductDetailPage from "@/components/template/product-detail-template";
import productImage from "@/public/project/oricube.png";
import data from "./product.json";

const LaTeXIndex = () => {
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
            url={data.url}
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

export default LaTeXIndex;
