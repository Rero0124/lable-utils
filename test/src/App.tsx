import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage, StyledButton } from "../../src";
import { Navigation } from "../../src/components/Navigation/Navigation";
import StyledButtonPage from "./page/StyledButtonPage";
import Main from "./page/Main";
import SwipeTogglePage from "./page/SwipeTogglePage";
import ClickAreaPage from "./page/ClickAreaPage";
import { RegisterPage } from "../../src/page/RegisterPage";
import PopupPage from "./page/PopupPage";

const App: React.FC = () => {
  const nav = {
    '메인': '/',
    'StyledButton': '/StyledButton',
    'SwipeToggle': '/SwipeToggle',
    'ClickArea': '/ClickArea',
    'Popup': '/Popup',
    'Login': '/Login',
    'Register': '/Register',
  }
  return (
    <>
      <BrowserRouter>
        <Navigation data={nav}/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/StyledButton" element={<StyledButtonPage />} />
          <Route path="/SwipeToggle" element={<SwipeTogglePage />} />
          <Route path="/ClickArea" element={<ClickAreaPage />} />
          <Route path="/Popup" element={<PopupPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;