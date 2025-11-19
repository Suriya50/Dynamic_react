
import './App.css';
import Array from './components/array';
import Arrayofobject from './components/Arrayofobject';
import Boolean from './components/Boolean';
import Navbar from './components/Navbar';
import Strin from './components/Strin';



const App = () => {


  return (

    <>

      <header>
        <Navbar />
      </header>

      <section>
        <Strin/>
      </section>

      <section>
        <Boolean />
      </section>


      <section>
        <Array />

      </section>

      <section>
        <Arrayofobject />
      </section>







    </>



  )

}

export default App;