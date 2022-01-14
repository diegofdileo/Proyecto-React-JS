import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/itemListContainer";
const ItemList = [
  { nombre: "Home", enlace: "/" },
  { nombre: "Nosotros", enlace: "/nosotros" },
  { nombre: "Contacto", enlace: "/contacto" },
];

function App() {
  return (
    <div className="App">
      <NavBar data={ItemList} />
      <ItemListContainer greeting="hola" />
    </div>
  );
}

export default App;
