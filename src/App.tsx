import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/HomePage';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
