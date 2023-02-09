import styled from "styled-components";
import DemoRouter1 from "../components/pages/DemoRouter1";

// Title コンポーネントの定義
export const TitleCss = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const MaxFrameCss = styled.video`
  // width: 100%;
  height: 50vh;
  width: 25vw;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
  background-color: black;
  border-radius: 50%; /*角丸*/
  animation: element 2s infinite;
`;

// styled.video 動画が再生されなかった場合の代替画像を準備次第追加
// background: url(../img/kv-alternative.jpg) no-repeat center/cover;
