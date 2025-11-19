
import './App.css';


import Dynamicaofb from './components/Dynamicaofb';
import Dynamicarr from './components/Dynamicarr';
import Dynamicbool from './components/Dynamicbool';
import Dynamicstr from './components/Dynamicstr';
import Navbar from './components/Navbar';




const App = () => {


  return (

    <>

      <header>
        <Navbar />
      </header>

      <section>
        <Dynamicstr/>
      </section>

      <section>
        <Dynamicbool />
      </section>


      <section>
        <Dynamicarr/>

      </section>

      <section>
        <Dynamicaofb />
      </section>







    </>



  )

}

export default App;