import "./App.css";
import Navbar from "./components/Navbar";
import ContextFun from "./context/ContextProvider";
import Home from "./components/Home";
function App() {
  return (
    <ContextFun>
      <Navbar />
      <Home />
    </ContextFun>
  );
}

export default App;
