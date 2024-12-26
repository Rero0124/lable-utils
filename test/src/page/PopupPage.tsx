import { useState } from "react"
import { Popup } from "../../../src"

const PopupPage: React.FC = () => {
  const [testClosed, setTestClosed] = useState<boolean>(true);
  const [test2Closed, setTest2Closed] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => {setTestClosed(false)}}>테스트 열기</button>
      <button onClick={() => {setTest2Closed(false)}}>테스트2 열기</button>
      <Popup onOpen={() => {console.log('열림')}} onClose={() => {console.log('닫힘'); setTestClosed(true)}} closed={testClosed}>테스트</Popup>
      <Popup onOpen={() => {console.log('열림2')}} onClose={() => {console.log('닫힘2'); setTest2Closed(true)}} closed={test2Closed}>테스트2</Popup>
    </>
  )
}

export default PopupPage;