import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { MaxFrameCss } from "../../css/default";

interface IProps {
  title?: string;
}

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

const H2Detail = styled.h2`
  font-size: 3rem;
  color: palevioletred;
  font-weight: bolder;
  margin-top: 0px;
`;

class AboutMe extends React.Component<IProps, {}> {
  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col lg={3} />
            <Col lg={3}>
              <H1>Name :</H1>
            </Col>
            <Col lg={1} />
            <Col lg={5}>
              <H1>Date of Birth :</H1>
            </Col>
          </Row>
          <Row>
            <Col lg={2}>
              <div style={{ transform: "translate(30%, -30%)" }}>
                <img
                  src="./../../asset/TopicMe.jpg"
                  style={{
                    width: "130px",
                    height: "130px",
                    border: "3px solid #000000",
                    borderRadius: "50%",
                    backgroundSize: "160px 160px",
                  }}
                />
              </div>
            </Col>
            <Col lg={1} />
            <Col lg={4}>
              <H1Impact>Sota Higuchi</H1Impact>
            </Col>
            <Col lg={5}>
              <H1Impact>26th October 1995</H1Impact>
            </Col>
          </Row>
          <Row>
            <H1>Detail: </H1>
            <Col lg={1} />
            <Col lg={11}>
              <H2Detail>
                First of all, Takoyaki is my soul food. It is no exaggeration to
                say that I was born to eat Takoyaki. Two years ago, I had the
                strongest love for Takoyaki and made and ate them at least once
                a week. Please give me a call when you have a Takoyaki party. I
                look forward to working with you. Thank you.
              </H2Detail>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default AboutMe;
