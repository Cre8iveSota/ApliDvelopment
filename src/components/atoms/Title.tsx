import React from "react";
import { TitleCss } from "../../css/default";

interface IProps {
  title?: string;
}

class Title extends React.Component<IProps, {}> {
  render() {
    return <TitleCss>{this.props.title}</TitleCss>;
  }
}

export default Title;
