import React, {useState} from 'react'
import './App.css';
import Main from './main';
import ReadMore from './components/ReadMore';
import Logo from './components/Logo';
import Header from './components/Header'
import NavLinks from './components/NavLinks'
function App() {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  console.log(query);
  return (
    <>


        <Header onChange={handleInputChange}/>
        <NavLinks />
        <Main query={query}/>
        <ReadMore />
        <Logo />

    </>
  );
}

export default App;
