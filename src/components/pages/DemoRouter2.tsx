import React from "react";

interface IProps {
  title?: string;
}

class DemoRouter2 extends React.Component<IProps, {}> {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <a href={`/`}>Root</a>
            </li>
            <li>
              <a href={`/demo1`}>Demo1</a>
            </li>
          </ul>
        </nav>
        <h1>Demo1</h1>
      </div>
    );
  }
}

export default DemoRouter2;
