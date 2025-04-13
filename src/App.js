import "./App.css";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import TopHeader from "./components/common/TopHeader";
import Faqs from "./components/Faqs";
import Features from "./components/Features";
import Hero from "./components/Hero";
import OurRoadMap from "./components/OurRoadMap";

function App() {
  return (
    <>
      <TopHeader />
      <Navbar />
      <Hero />
      <Features />
      <OurRoadMap />
      <Faqs />
      <Footer />
    </>
  );
}

export default App;
