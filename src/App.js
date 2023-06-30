// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textfroms from './components/Textfroms';

function App() {
  return (
    <>
   <Navbar/>
   <div className="container my-2">
   <Textfroms heading="Congrats! Darshil This is First your React App"/>
   </div>
    </>
  );
}

export default App;
