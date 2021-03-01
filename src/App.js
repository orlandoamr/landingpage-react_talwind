import logo from './logo.svg';
import './App.css';
import BrandHeader from './components/BrandHeader/BrandHeader'
import Cards from './components/Cards/Cards';
import CardHolder from './components/Cards/CardHolder';
import NavBarItems from './components/NavBars/NavBarItems';
import Login from './components/Login/Login';
import FormField from './components/Forms/FormField';

function App() {
  return (
    <section>
      <BrandHeader></BrandHeader>
      <section>
        <Login></Login>
      </section>   
    </section>
  );
}

export default App;
