import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Places from './pages/Places';
import Layout from './Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='places' element={<Places />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
