import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Home } from './pages/HomePage';
import { Test } from './pages/TestPage';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <BrowserRouter>
        <RecoilRoot>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </>
  );
}

export default App;
