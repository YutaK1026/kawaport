import fs from "fs";
import path from "path";
import React from "react";
import ProductDetailPage from "@/components/template/product-detail-template";
import { ProductData } from "@/types/product";

async function getProductData(id: string): Promise<ProductData | null> {
  const productDir = path.join(process.cwd(), "src/products");
  const filePath = path.join(productDir, `${id}.json`);

  if (fs.existsSync(filePath)) {
    const fileContents = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContents);
  }
  return null;
}

type Params = Promise<{ slug: string }>;

export default async function Page(props: { params: Params }) {
  const { slug } = await props.params;
  const data = await getProductData(slug);

  if (!data) return <div>Product not found</div>;

  return (
    <ProductDetailPage>
      <ProductDetailPage.ProductImage imgUrl={`/project/${slug}.png`} />
      <ProductDetailPage.Title>{data.title}</ProductDetailPage.Title>
      <ProductDetailPage.Content
        leftContent={
          <ProductDetailPage.LeftContent
            skillStack={data.skill_stack}
            member={data.member}
            period={data.period}
            githubUrl={data.github_url}
            url={data.url}
          />
        }
        rightContent={
          <ProductDetailPage.RightContent
            content={data.content}
            contentPoint={data.content__point}
          />
        }
      />
    </ProductDetailPage>
  );
}

// ビルド時に動的ルートを生成
export async function generateStaticParams() {
  const productsDir = path.join(process.cwd(), "src/products");
  const fileNames = fs.readdirSync(productsDir);
  const paths = fileNames.map((fileName) => ({
    params: { slug: fileName.replace(/\.json$/, "") },
  }));

  return paths;
}
