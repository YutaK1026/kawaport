import fs from "fs";
import path from "path";
import React from "react";
import ProductDetailPage from "@/components/Product/Detail";
import { ProductData } from "@/types/product";
import Footer from "@/components/Home/Footer";
import TopHeader from "@/components/Home/TopHeader";

function getProductData(id: string): ProductData | null {
  const productDir = path.join(process.cwd(), "src/products");
  const filePath = path.join(productDir, `${id}.json`);

  if (fs.existsSync(filePath)) {
    const fileContents = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContents);
  }
  return null;
}

export async function generateStaticParams() {
  const productsDir = path.join(process.cwd(), "src/products");
  const fileNames = fs.readdirSync(productsDir);

  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.json$/, ""),
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const data = getProductData(params.slug);

  if (!data) return <div>Product not found</div>;

  return (
    <div>
      <TopHeader />
      <ProductDetailPage>
        <ProductDetailPage.ProductImage
          imgUrl={`/project/${params.slug}.png`}
        />
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
      <Footer />
    </div>
  );
}
