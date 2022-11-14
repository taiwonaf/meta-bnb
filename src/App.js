import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Places from './pages/Places';
import Layout from './Layout';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='places' element={<Places />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
