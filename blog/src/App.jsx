import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Body from './Components/Body';

function App() {
  const [home, sethome] = useState(true);
  const [selectedBlogId, setSelectedBlogId] = useState(null);

  return (
    <>
      <Header home={home} sethome={sethome} />
      <Body
        home={home}
        sethome={sethome}
        selectedBlogId={selectedBlogId}
        setSelectedBlogId={setSelectedBlogId}
      />
      <Footer />
    </>
  );
}

export default App;

