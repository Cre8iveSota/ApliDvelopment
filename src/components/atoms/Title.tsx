import React from "react";

interface IProps {
  title?: string;
}

class Title extends React.Component<IProps, {}> {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

export default Title;
