import { useEffect, useState } from "react";
import CardData from './components/Card';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [charData, setCharData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      console.log(data)

      setCharData(data.results)
    }
    fetchData()
  },[])


  return (
    <div>
      <CardData charData={charData} />
    </div>
  );
}

export default App;
