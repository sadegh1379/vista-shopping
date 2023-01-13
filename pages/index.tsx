import Head from "next/head";
import {
  Banner,
  Navbar,
  SecondBanner,
  ProductSlider,
  ThirdBanner,
  DownloadApp,
  ProductsCategory,
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
        <div className="p-2 lg:p-0 mb-10">
          <Banner />
          <SecondBanner />
          <ProductSlider />
          <SecondBanner />
          <ProductsCategory />
          {/* <ThirdBanner />
          <DownloadApp /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
