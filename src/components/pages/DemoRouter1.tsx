import React from "react";
import { MaxFrameCss } from "../../css/default";

interface IProps {
  title?: string;
}

class DemoRouter1 extends React.Component<IProps, {}> {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <a href={`/`}>Root</a>
            </li>
            <li>
              <a href={`/demo2`}>Demo2</a>
            </li>
            <li>
              <a href={`/todo`}>todo</a>
            </li>
          </ul>
        </nav>
        <h1>Demo1</h1>
        <MaxFrameCss
          src="./../../../asset/portfolioFreestyle.mp4"
          autoPlay
          loop
          muted
        ></MaxFrameCss>
      </div>
    );
  }
}

export default DemoRouter1;
