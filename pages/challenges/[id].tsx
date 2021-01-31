import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import ListBox from "../../components/ListBox";

const Home = () => {
  const router = useRouter();
  const { id } = router.query;
  const url = id
    ? `${process.env.NEXT_PUBLIC_ALL_CHAllENGES_USER_URL}/${id}`
    : undefined;

  return (
    <div>
      <Head>
        <title>30 days challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ListBox url={url}></ListBox>
    </div>
  );
};

export default Home;
