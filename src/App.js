import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <hr></hr>
      <p>Sub Header</p>
      <hr></hr>
      <p>Main Body</p>
      <hr></hr>
      <Footer/>
    </div>
  );
}

export default App;
