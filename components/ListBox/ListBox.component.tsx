import React, { useEffect, useState, FunctionComponent } from "react";
import StyledListBox, {
  StyledDescription,
  StyledTitle,
  StyledCheckBoxContainer,
  CheckBoxes,
} from "./ListBox.styles";
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

  const checkBoxes = [];

  {
    for (let index = 0; index <= 30; index++) {
      checkBoxes.push(
        <StyledCheckBoxContainer>
          <label htmlFor={`text-box-${index}`}> day {index}</label>
          <input type="checkbox" name={`text-box-${index}`} value={index} />
        </StyledCheckBoxContainer>
      );
    }
  }

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
            <StyledTitle>{challenge.title}</StyledTitle>
            <StyledDescription>{challenge.description}</StyledDescription>
            <CheckBoxes>{checkBoxes}</CheckBoxes>
          </li>
        ))}
      </StyledListBox>
    </>
  );
};

export default ListBox;
