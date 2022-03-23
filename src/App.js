import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card'

function App() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  
  console.log(cart);
  const handleAddToCart = (gun) => {
    const newCart = [...cart, gun];
    setCart(newCart);
    }

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
      .then(res => res.json())
      .then(data => setGuns(data))    
  },[])
  return (
    <div>
      <Navbar></Navbar>  
      <div className="">
        {
        cart.map((item) => (
          <h1 key={item.id}>{ item.name}</h1>
        ))
      }
      </div>
      <div className="card-Container">
        {
        guns.map((gun) => (
          <Card key={gun.id} gunData={gun} handleAddToCart={ handleAddToCart }/>
        ))
      }
      </div>      
    </div>
  );
}

export default App;
