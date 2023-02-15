import { Button, Col, Container, Row } from "react-bootstrap";
import ScrollingBackgroundImages from "./components/molecules/ScrollingBackgroundImages";
import Footer from "./components/organisms/Footer";
import Header from "./components/organisms/Header";
import {
  Background1,
  Background2,
  BackgroundColor,
  ContainerTagNoMargin,
  ContainerWithinBackGroundColor,
  DivCenter,
  MainTitleCss,
  PaddingDiv,
  PaddingDivSmall,
  RowFooter,
  RowMain,
  TitleCss,
} from "./css/default";
import React, { useState, useEffect, useRef } from "react";
import CircleButton from "./components/atoms/CircleButton";
import NavSystem from "./components/molecules/NavSystem";
import Hobbies from "./components/organisms/Hobbies";
import DemoRouter2 from "./components/pages/DemoRouter2";
import AboutMe from "./components/pages/AboutMe";
import { TodoContainer } from "./components/pages/TodoPresenter/feature";
import Title from "./components/atoms/Title";
import OptionCard from "./components/molecules/OptionCard";

interface IProps {
  id: string;
}

interface IState {
  name: string;
  title: string;
}

export default function Layout(props: IProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [contentIndex, setContentIndex] = useState(0);

  const changeContentIndex = (index: number) => {
    setContentIndex(index);
  };
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getBackgroundImage = () => {
    if (window.innerWidth <= 768) {
      return "./../../../asset/MainBoard_small.jpg";
    } else {
      return "./../../../asset/MainBoard.jpg";
    }

    // return scrollPosition > 20
    //   ? "./../../../asset/MainBoard.jpg"
    //   : "../../../../asset/FrontView.jpg";
  };

  const getBackgroundStyle = () => {
    return {
      backgroundImage: `url(${getBackgroundImage()})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% auto",
    };
  };

  const [title, setTitle] = useState("Sota Welcome");

  const changeTitle = (title: string) => {
    setTitle(title);
  };

  const scrollToContainer = () => {
    containerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <BackgroundColor>
      <Background1>
        <MainTitleCss>
          Welcome to
          <br /> Sota <br /> Self Introduction Page{" "}
        </MainTitleCss>
        <CircleButton handleButtonClick={scrollToContainer}></CircleButton>{" "}
      </Background1>
      <div ref={containerRef} style={getBackgroundStyle()}>
        <Container fluid>
          <Row>{/* <Header changeTitle={changeTitle} title={title} /> */}</Row>
          <Col lg={2}></Col>
          <Col lg={8}>
            <RowMain>
              <PaddingDivSmall />
              <Title countNum={contentIndex} />
              {contentIndex === 0 && <AboutMe />}
              {contentIndex === 1 && <TodoContainer />}
              {contentIndex === 2 && <Hobbies />}
            </RowMain>
          </Col>
          <Col lg={2}></Col>
        </Container>
        <Container fluid>
          <RowFooter>
            <Col lg={2}></Col>
            <Col lg={8}>
              <div>
                {/* <Button onClick={() => changeContentIndex(0)}>Content 1</Button>
                <Button onClick={() => changeContentIndex(1)}>Content 2</Button>
                <Button onClick={() => changeContentIndex(2)}>Content 3</Button> */}
                <Col lg={3}>
                  <OptionCard
                    cardTitle={"About Me"}
                    cardText={`
                    Let me introduce myself, I am 27 years old and currently unemployed.
                     By the way, I like takoyaki.
                       `}
                    buttonText={"Please Push"}
                    onClick={() => changeContentIndex(0)}
                    imgSrc={"./../../../asset/AboutMe.jpg"}
                  />
                </Col>
                <Col lg={3}>
                  <OptionCard
                    cardTitle={"DemoRouter1"}
                    cardText={"I am cold"}
                    buttonText={"Please Push"}
                    onClick={() => changeContentIndex(1)}
                    imgSrc={"./../../../asset/Workes.jpg"}
                  />
                </Col>
                <Col lg={3}>
                  <OptionCard
                    cardTitle={"Hobbies"}
                    cardText={`
                    I have many hobbies and am happy to do many things I want to do.
                    I want to have unlimited time.
                      `}
                    buttonText={"Please Push"}
                    onClick={() => changeContentIndex(2)}
                    imgSrc={"./../../../asset/Hobbies.jpg"}
                  />
                </Col>
                <Col lg={3}>
                  <PaddingDivSmall />
                  <img src="./../../../asset/SotaHiguchi.svg" />
                </Col>
              </div>
            </Col>
            <Col lg={2}></Col>
          </RowFooter>
        </Container>
      </div>
    </BackgroundColor>
  );
}
