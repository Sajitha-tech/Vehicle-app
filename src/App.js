import logo from './logo.svg';
import './App.css';
import AddVehicle from './components/AddVehicle';
import Remove from './components/Remove';
import Search from './components/Search';
import Viewall from './components/Viewall';

function App() {
  return (
    <div>
      <AddVehicle/>
      <Remove/>
      <Search/>
      <Viewall/>
    </div>
  );
}

export default App;
