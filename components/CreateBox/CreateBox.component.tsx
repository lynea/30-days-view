import React, { FunctionComponent, useEffect, useState } from "react";
import {
  StyledCreateBox,
  Button,
  Container,
  PurpleBox,
  Input,
  TextArea,
} from "./CreateBox.styles";

const CreateBox: FunctionComponent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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
      })

      .catch((error) => {
        console.error("Error:", error);
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
          <Button onClick={handleSubmit}>create</Button>
        </StyledCreateBox>
      </PurpleBox>
    </Container>
  );
};

export default CreateBox;
