import React from "react";
import Footer from "./components/organisms/Footer";
import Header from "./components/organisms/Header";

interface IProps {
  id: string;
}

interface IState {
  name: string;
  title: string;
}

export default class Layout extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { name: "", title: "Sota Welcome" };
  }
  changeTitle = (title: string) => {
    this.setState({ title });
  };
  render() {
    // setTimeout(() => {
    //   this.setState({ title: "to Melborun !!Fight" });
    // }, 4000);
    return (
      <div>
        <nav>
          <ul>
            <li>
              <a href={`/demo1`}>Demo1</a>
            </li>
            <li>
              <a href={`/demo2`}>Demo2</a>
            </li>
            <li>
              <a href={`/todo`}>todo</a>
            </li>
          </ul>
        </nav>
        <Header
          changeTitle={this.changeTitle.bind(this)}
          title={this.state.title}
        />
        {/* <Header title={"Thank you"} /> */}
        <div>Hello React San</div>
        {/* {this.state.name} */}
        <Footer />
      </div>
    );
  }
}
