import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Subheader from "./components/Subheader"

function App() {
  return (
    <div className="App">
      <Header/>
      <hr></hr>
      <Subheader/>
      <hr></hr>
      <Main/>
      <Main/>
      <Main/>
      <hr></hr>
      <Footer/>
    </div>
  );
}

export default App;
