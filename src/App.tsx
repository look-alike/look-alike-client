import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/HomePage';
import { Test } from './pages/TestPage';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
