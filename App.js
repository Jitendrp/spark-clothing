import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import AppRoutes from './routes/AppRoutes/AppRoutes';
import Footer from './components/Footer/Footer';
import { ProductProvider } from './contexts/ProductContext';

function App () {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ProductProvider>
          <div className="App">
            <Header />
            <main className="container mt-5 pt-3">
              <AppRoutes />
            </main>
            <Footer />
          </div>
        </ProductProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
