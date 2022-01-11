import "./App.css";
import NavBar from "./components/NavBar/NavBar";

const ItemList = [
  { nombre: "Home", enlace: "/" },
  { nombre: "Nosotros", enlace: "/nosotros" },
  { nombre: "Contacto", enlace: "/contacto" },
];

function App() {
  return (
    <div className="App">
      <NavBar data={ItemList} />
    </div>
  );
}

export default App;
