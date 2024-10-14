import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import AppLayout from './pages/AppLayout';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Homepage />}
        />
        <Route
          path='product'
          element={<Product />}
        />
        <Route
          path='pricing'
          element={<Pricing />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        {/* Nested Routes */}
        <Route
          path='app'
          element={<AppLayout />}
        >
          <Route
            path='cities'
            element={<p>List Cities</p>}
          />
          <Route
            path='countries'
            element={<p>List Countries</p>}
          />
          <Route
            path='form'
            element={<p>Form</p>}
          />
        </Route>
        <Route
          path='*'
          element={<PageNotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
