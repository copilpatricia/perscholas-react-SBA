import { useEffect, useState } from "react";
import CardData from './components/Card';
import { Nav } from "./components/Nav";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [charData, setCharData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5,13,7,8,9,10,11,12");
      const data = await res.json();
      console.log(data)
      //data.results - when I have the entire array with objects inside /character
      // data - when I have a particular array/arrays /character/1,2,3,4,5,6,7,8,9,10
      setCharData(data)
    }
    fetchData()
  },[])


  return (
    <div className="main-app">
      <Nav></Nav>
      <CardData charData={charData} />
  
    </div>
  );
}

export default App;
