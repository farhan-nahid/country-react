import { useEffect, useState } from 'react';
import './App.css';
import Cart from './Component/Cart/Cart';
import Country from './Component/Country/Country';

function App() {
 const [countries , setCountries] = useState([ ])
const [cart, setCart] = useState([ ])

 useEffect( ()=>{
      fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data =>{ 
        setCountries(data);
       console.log(data);
       const name= data.map(country => country.name);
       console.log(name);
      })
      .catch(error => window.alert(error))
}, [ ])

const handleAddCountry = (country) => {
  const newCart = [...cart, country]
  setCart(newCart)
}
  return ( 
    <div className="App">
      <h1>Countries Loaded : {countries.length}</h1>
      <h4>Country Added : {cart.length}</h4>
      <Cart cart={cart}></Cart>
      {/* country component */}
      {
        countries.map(country => <Country country= {country} handleAddCountry={handleAddCountry} key = {country.alpha3Code}></Country>)
      }
      
    </div>
  );
}

export default App;
