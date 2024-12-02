import Header from "@/components/Home/Header";
import Cards from "@/components/Home/Cards";
import Footer from "@/components/Home/Footer";
import TopHeader from "@/components/Home/TopHeader";

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
