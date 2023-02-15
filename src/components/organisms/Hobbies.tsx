import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { PaddingDiv, PaddingDivSmall } from "../../css/default";

const H1 = styled.h1`
  font-size: 5 rem;
  font-weight: bolder;
  color: palevioletred;
`;

const H1Impact = styled.h1`
  font-size: 6rem;
  color: palevioletred;
  font-weight: bolder;
`;

const H2DetailCustom = styled.h2`
  font-size: 2.5rem;
  color: palevioletred;
  font-weight: bolder;
`;
const H3 = styled.h3`
  font-size: 2rem;
  color: palevioletred;
  font-weight: bolder;
  margin-top: 0;
`;

export default function Hobbies() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={6}>
            <H1>Free Sttyle Foot Ball :</H1>
          </Col>
          <Col lg={6}>
            <H1>Electric Works :</H1>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <H3>
              I participated in Japanese competitions but failed to qualify in
              all of them. However, I was sometimes invited by the organizers of
              the competitions.
            </H3>
          </Col>
          <Col lg={6}>
            <H3>
              I built an electronic piano using an Arudino and parts I had at
              home. Aluminum foil is stretched over the back of the keys to
              conduct electricity.
            </H3>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>
            <video
              src="./../../../asset/portfolioFreestyle.mp4"
              autoPlay
              loop
              muted
              style={{
                height: "20vh",
                border: "3px solid #ffffff",
                transform: "translate(30%, 0%)",
              }}
            ></video>
          </Col>
          <Col lg={1} />
          <Col lg={5}>
            <video
              src="./../../../asset/electricWorks.mp4"
              autoPlay
              loop
              muted
              style={{
                height: "20vh",
                border: "3px solid #ffffff",
                transform: "translate(30%, 0%)",
              }}
            ></video>
          </Col>
          <Col lg={1} />
        </Row>
        <Row>
          <Col lg={1} />
          <H2DetailCustom>Others: </H2DetailCustom>
          <Col lg={11}>
            <H3>
              My hobbies include: karaoke, billiards, bowling, reading,
              skateboard, violin, board game, etc...
            </H3>
          </Col>
        </Row>
      </Container>
    </>
  );
}
