import Header from "@/components/organisms/header";
import Cards from "@/components/organisms/cards";
import Footer from "@/components/organisms/footer";
import TopHeader from "@/components/organisms/top-header";

export default function Home() {
  return (
    <div>
      <TopHeader />
      <Header />
      <Cards />
      <Footer />
    </div>
  );
}
