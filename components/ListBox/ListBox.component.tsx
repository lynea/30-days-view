import React, { useEffect, useState, FunctionComponent } from "react";
import StyledListBox from "./ListBox.styles";
import { useRouter } from "next/router";

interface ListBoxProps {
  url: string;
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
        {" "}
        <li>hello</li>
        <li>world</li>
      </StyledListBox>
    </>
  );
};

export default ListBox;
