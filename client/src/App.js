import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Category from './components/Category/Category';
import Item from './components/Item/Item';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppContext from './utils/context';
import Newsletter from './components/Footer/Newsletter/Newsletter';

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/product/:id" element={<Item />} />
        </Routes>
        <Newsletter />
        <Footer />
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
