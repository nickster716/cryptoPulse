import Layout from "../components/Layout";
import Banner from "../components/Banner";
import CoinsTable from "../components/CoinsTable";
import Head from "next/head";

import SplashCursor from "../components/SplashCursor";
import Aurora from "../components/Aurora";

export default function Home() {
  return (
    <>
      <SplashCursor />
      <Head>
        <title>Crypto-Fetcher</title>
      </Head>
      <Banner />
      <CoinsTable />
    </>
  );
}
