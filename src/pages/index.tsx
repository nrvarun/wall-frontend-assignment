import type { NextPage } from "next";
import Head from "next/head";

import HomeContent from "../Views/Home";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wall App - Front-end Assignment </title>
        <meta name="description" content="Crafted by Varun" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <HomeContent />
      </main>
    </>
  );
};

export default Home;
