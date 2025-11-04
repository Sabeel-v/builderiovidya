import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Placeholder from "./pages/Placeholder";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route
              path="/courses"
              element={<Placeholder pageName="Courses" />}
            />
            <Route
              path="/about"
              element={<Placeholder pageName="About Us" />}
            />
            <Route
              path="/news"
              element={<Placeholder pageName="News & Events" />}
            />
            <Route path="/blog" element={<Placeholder pageName="Blog" />} />
            <Route
              path="/contact"
              element={<Placeholder pageName="Contact" />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
