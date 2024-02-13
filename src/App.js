import { useEffect, useState } from 'react';
import './App.css';
import News from './Component/News/News';
import Hero from './Component/Hero/Hero';

function App() {

  let [art,setart] = useState([]);
  let [cat,setcat] = useState("india")
  useEffect(()=>{
    fetch(`https://newsapi.org/v2/everything?q=${cat}&from=2024-01-27&apiKey=f55b12837f374d59944bcfc2d3968b43`)
    .then((response)=>response.json())
    .then((data)=>{
      setart(data.art);
    })
  },[cat])
  return (
    <>
    
    <nav className="navbar bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" >News Paper</a>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" onChange={(event)=>{if(event.target.value!==""){setcat(event.target.value)}else{setcat("india")}}} placeholder="Search" aria-label="Search"/>
                </form>
            </div>
    </nav>
    <Hero/>
    {
      art.map((article)=>{
        return(
          <News article={article}/>
        )
      })
    }
    </>
  );
}

export default App;
