import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Register />
      <Login />
      <Footer />
    </>
  );
}

export default App;