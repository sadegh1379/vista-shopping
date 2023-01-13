import Head from "next/head";
import {
  Banner,
  Navbar,
  SecondBanner,
  ProductSlider,
  ThirdBanner,
  DownloadApp,
  ProductsCategory,
  Suggestions,
  Footer,
} from "../components";

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full lg:w-[80%] mx-auto">
        <Navbar />
        <div className="p-2 overflow-x-hidden lg:p-0 mb-3">
          <Banner />
          <SecondBanner />
          <ProductSlider title="تخفیف های ویتسل"/>
          <SecondBanner />
          <ProductsCategory />
          <Suggestions />
          <ProductSlider title="پرفروش ترین محصولات" />
          <ThirdBanner />
          <DownloadApp />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
