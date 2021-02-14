import React, { useState, useEffect } from "react";
import {
  StyledSmallCreateBox,
  PurpleBox,
  Container,
  Button,
} from "../CreateBox/CreateBox.styles";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(isBetween);

interface CompleteBoxProps {
  onClick: () => void;
}

const CompleteBox = ({
  id,
  title,
  description,
  completedDays,
  startDate,
  endDate,
  onItemclick,
}) => {
  const isBetween = dayjs().isBetween(startDate, endDate);
  const today = () => dayjs().toISOString().toString().slice(0, 10);
  const completedToday =
    completedDays.find((day) => {
      return day.toString().includes(today());
    }) !== undefined;

  const [canBeCompleted, setCanBeCompleted] = useState(false);

  useEffect(() => {
    // als vandaag nog niet completed
    // console.log("completed today", completedToday);
    // console.log("isbetween", isBetween);
    console.log("both", isBetween && !completedToday);

    if (!completedToday && isBetween) {
      setCanBeCompleted(true);
      console.log("can be completed:", canBeCompleted);
    }
  }, []);
  const challenge = {
    date: [...completedDays, dayjs()],
    id,
  };

  const completeToday = () => {
    fetch(`${process.env.NEXT_PUBLIC_ALL_CHAllENGES_USER_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(challenge),
    })
      .then((response) => {
        console.log("succelfully updated!", response);
        onItemclick();
      })

      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Container onClick={canBeCompleted ? completeToday : undefined}>
      <PurpleBox>
        <StyledSmallCreateBox clickable={canBeCompleted}>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>
            {" "}
            {((completedDays.length / 30) * 100).toFixed(2)}%{" "}
            {completedDays.length} / 30{" "}
          </p>
        </StyledSmallCreateBox>
      </PurpleBox>
    </Container>
  );
};

export default CompleteBox;
