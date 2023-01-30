import React from "react";
import Footer from "./components/organisms/Footer";
import Header from "./components/organisms/Header";

interface IProps {
  id: string;
}

interface IState {
  name: string;
}

export default class Layout extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { name: "" };
  }
  render() {
    setTimeout(() => {
      this.setState({ name: "HelloHelloHello" });
    }, 3000);
    return (
      <div>
        <Header />
        <div>Hello React San</div>
        {this.state.name}
        <Footer />
      </div>
    );
  }
}
