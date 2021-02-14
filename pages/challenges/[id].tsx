import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import CompleteBox from "../../components/CompleteBox";
import CreateBox from "../../components/CreateBox";

const Home = () => {
  const router = useRouter();
  const [challenges, setChallenges] = useState([]);
  const [renderWhatcher, setRenderWhatcher] = useState(0);

  const { id } = router.query;
  const url = id
    ? `${process.env.NEXT_PUBLIC_ALL_CHAllENGES_USER_URL}/${id}`
    : undefined;

  useEffect(() => {
    try {
      fetch(url)
        .then((response) => {
          if (response.status === 400) {
            throw new Error("it looks like that user does not exist");
          }
          return response.json();
        })
        .then((data) => setChallenges(data));
    } catch (error) {
      console.error(`oops something went wrong because of:`, error);
    }
    console.log(challenges);
  }, [url, renderWhatcher]);

  const onItemClick = () => {
    setRenderWhatcher(renderWhatcher + 1);
  };

  return (
    <div>
      <Head>
        <title>30 days challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CreateBox />
      <h1> your challenges :</h1>
      {challenges.map((challenge) => (
        <CompleteBox
          startDate={challenge.startDate}
          endDate={challenge.endDate}
          description={challenge.description}
          id={challenge.id}
          title={challenge.title}
          completedDays={challenge.daysCompleted}
          onItemclick={onItemClick}
        />
      ))}
    </div>
  );
};

export default Home;
