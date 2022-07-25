// import './App.css';
import Bnr from './Bnr.js';
import Title from './Title.js';
import Menu from './Menu.js';
import Adv from './Adv.js';
import Main1 from './Main1.js';
import Footer from './Footer.js';
import UserMenu from './UserMenu.js';
import Join from './Join.js';

import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Bnr />
          <UserMenu/>
          <Title />
          <Menu />
          <Adv />
          <Main1/>
          <Main1/>
          <Main1/>
          <Join/>
          <Footer/>  
      
          
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
