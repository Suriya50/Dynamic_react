
import './App.css';
import Array from './components/array';
import Arrayofobject from './components/Arrayofobject';
import Boolean from './components/Boolean';
import Navbar from './components/Navbar';
import String from './components/string';



const App = () => {


  return (

    <>

      <header>
        <Navbar />
      </header>

      <section>
        <String/>
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