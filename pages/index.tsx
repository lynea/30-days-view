import React from "react";
import Head from "next/head";
import ListBox from "../components/ListBox";
const Home = () => (
  <div>
    <Head>
      <title>30 days challenge</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <ListBox></ListBox>
  </div>
);

export default Home;
