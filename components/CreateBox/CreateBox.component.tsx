import React, { FunctionComponent, useState } from "react";
import {
  StyledCreateBox,
  Button,
  Container,
  PurpleBox,
  Input,
  TextArea,
  Error,
} from "./CreateBox.styles";
import dayjs from "dayjs";

const CreateBox: FunctionComponent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showError, setShowError] = useState(false);

  const storeDescription = (event) => {
    event.preventDefault();
    setDescription(event.target.value);
  };

  const storeTitle = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  const handleSubmit = () => {
    const challenge = {
      title,
      description,
      authorEmail: "rene@30days.io",
      endDate: dayjs().add(30, "day"),
    };

    fetch(process.env.NEXT_PUBLIC_ALL_CHAllENGES_USER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(challenge),
    })
      .then((response) => {
        setTitle("");
        setDescription("");
        setShowError(false);
      })

      .catch((error) => {
        console.error("Error:", error);
        setShowError(true);
      });
  };

  return (
    <Container>
      <PurpleBox>
        <StyledCreateBox>
          <Input
            onChange={storeTitle}
            placeholder="Enter a challenge"
            value={title}
          />
          <TextArea
            onChange={storeDescription}
            placeholder="what is your challenge about?"
            value={description}
          />

          {showError && (
            <Error>Oops something went wrong, plaese try again</Error>
          )}
          <Button onClick={handleSubmit}>create</Button>
        </StyledCreateBox>
      </PurpleBox>
    </Container>
  );
};

export default CreateBox;
