import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SingleBlog from "./pages/SingleBlog";
import AddCategory from "./pages/AddCategory";
import AddBlog from "./pages/AddBlog";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen overflow-y-hidden">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
                <Route path="/" element={<Home />} />
                <Route path="/blog/:id" element={<SingleBlog/>} />
                <Route path="/add-blog" element={<AddBlog/>} />
                <Route path="/add-category" element={<AddCategory/>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
