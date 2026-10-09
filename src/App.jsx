import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivacyPolicy from "./components/common/PrivacyPolicy";
import TermsConditions from "./components/common/TermsConditions";
import AccountBar from "./components/layout/AccountBar";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Home from "./page/home/Home";
import About from "./page/about/About";
import Gallery from "./page/gallery/gallery";
import Contact from "./page/contact/Contact";
import WhySteelDoors from "./page/whySteelDoors/WhySteelDoors";
import DomesticProducts from "./components/Product/DomesticProducts";
import IndustrialProducts from "./components/Product/IndustrialProducts";
import ProductDetails from "./components/Product/ProductDetails";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <AccountBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/why-choose-us" element={<WhySteelDoors />} />

        <Route path="/products/domestic" element={<DomesticProducts />} />

        <Route path="/products/industrial" element={<IndustrialProducts />} />

        <Route path="/products/:category/:id" element={<ProductDetails />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
