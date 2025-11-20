
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dynamicaofb from './components/Dynamicaofb';
import Dynamicarr from './components/Dynamicarr';
import Dynamicbool from './components/Dynamicbool';
import Dynamicstr from './components/Dynamicstr';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';




const App = () => {


  return (

    <>

      <header>
        <Navbar />
      </header>

      <Routes>
       <Route path='/' element={<Homepage/>}/>
       <Route path='/About' element={<Dynamicstr/>}/>
       <Route path='/hero' element={<Dynamicbool/>}/>
       <Route path='/detail' element={<Dynamicarr/>}/>
       <Route path='/ticket' element={<Dynamicaofb/>}/>



      </Routes>

      




    </>



  )

}

export default App;