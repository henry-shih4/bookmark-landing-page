import "./App.css";
import Features from "./components/Features";
import Header from "./components/Header";
import Main from "./components/Main";
import Downloads from "./components/Downloads";
import Questions from "./components/Questions";
import Footer from "./components/Footer";
function App() {
  window.onload = function () {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let text = document.querySelectorAll("footer button, header button");
    text.forEach((element) => {
      element.onmouseover = (event) => {
        let iterations = 0;
        const interval = setInterval(() => {
          event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
              if (index < iterations) {
                return event.target.dataset.value[index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          if (iterations >= event.target.dataset.value.length) {
            clearInterval(interval);
          }

          iterations += 1 / 2;
        }, 30);
      };
    });
  };

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
