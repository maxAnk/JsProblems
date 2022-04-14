import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Shop from './components/Shop';

function App() {
  return (
    <>
      <Navbar title="MyApp" link1="Home" link2="about"/>
      <div className='container'>
       <Shop/>
      </div>
      {/* <TextForm title="MyApp"/> */}
    </>
  );
}

export default App;
