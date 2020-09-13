import React, { useState } from 'react';
import './App.css';
import Popup from './components/Popup';  

function App() {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
 
  return <div className="wrapper">
    <input className="btn"
      type="button"
      value="재고 추가"
      onClick={togglePopup}
    />
    {isOpen && <Popup
      content={<>
        <div className="top">
          <b>재고 추가</b>
        </div>
        <div className="middle">
          <div className="part1 parts">
            <img id="img" src="http://placehold.it/180" alt="your image" />
            <input type='file' onchange="readURL(this);" />
          </div>
          <div className="part2 parts">
            <p>제품명 &nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="fname" name="fname"/></p>
            <p>제품번호 &nbsp;<input type="text" id="fname" name="fname"/></p>
            <p>수량 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="fname" name="fname"/></p>
            <p>사이즈 &nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="fname" name="fname"/></p>
          </div>
          <div className="part3 parts">
            <p>제품명</p>
            <p>제품번호</p>
            <p>수량</p>
            <p>사이즈</p>
          </div>
        </div>
        
      </>}
      handleClose={togglePopup}
    />}
  </div>
}
 
export default App;