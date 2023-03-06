import "./App.css";
import Features from "./components/Features";
import Header from "./components/Header";
import Main from "./components/Main";
import Downloads from "./components/Downloads";
import Questions from "./components/Questions";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Features />
      <Downloads />
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
