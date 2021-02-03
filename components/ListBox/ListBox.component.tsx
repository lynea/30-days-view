import React, { useEffect, useState, FunctionComponent } from "react";
import StyledListBox from "./ListBox.styles";
import { useRouter } from "next/router";

interface ListBoxProps {
  url: string;
}

interface Challenge {
  description: string;
  title: string;
}

const ListBox: FunctionComponent<ListBoxProps> = ({ url }) => {
  const router = useRouter();
  const { id } = router.query;
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    if (url) {
      try {
        fetch(`${url}/`)
          .then((response) => response.json())
          .then((data) => setChallenges(data));
      } catch (error) {
        console.error(`oops something went wrong because of:`, error);
      }
    }
  }, [url]);
  return (
    <>
      <h1>
        user with id: ({id}) has {challenges.length} challenges to complete
      </h1>
      <StyledListBox>
        {challenges.map((challenge: Challenge) => (
          <li key={challenge.title}>
            {" "}
            title: {challenge.title} description: {challenge.description}{" "}
          </li>
        ))}
      </StyledListBox>
    </>
  );
};

export default ListBox;
