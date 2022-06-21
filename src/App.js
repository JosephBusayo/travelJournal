import './App.css';
import Data from './Data'
import Navbar from './components/Navbar'
import Location from './components/Location';


function App() {
  const finalPiece = Data.map(item => {return <Location id = {item.id}item = {item}/> } )

  return (
    <div className="App">
      <Navbar />
      {finalPiece}
    </div>
  );
}

export default App;
