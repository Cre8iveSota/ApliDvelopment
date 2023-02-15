import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

interface IProps {
  cardTitle: string;
  cardText: string;
  buttonText: string;
  onClick: any;
  imgSrc: string;
}

function OptionCard(props: IProps) {
  const [contentIndex, setContentIndex] = useState(0);

  return (
    <Card
      style={{
        width: "20rem",
        border: "1rem solid #000000",
        borderRadius: "5%",
      }}
    >
      <Card.Img
        variant="top"
        src={props.imgSrc}
        style={{ width: "180px", height: "100px" }}
      />
      <Card.Body>
        <div style={{ textAlign: "center" }}>
          <Card.Title>{props.cardTitle}</Card.Title>
          <Card.Text>{props.cardText}</Card.Text>
          <Button
            variant="primary"
            onClick={() => props.onClick()}
            style={{ display: "block", margin: "0 auto" }}
          >
            {props.buttonText}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default OptionCard;
