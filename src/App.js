import "./App.css";
import Product from "./Product/Product";

const products = [
  {
    id: 1,
    nome: "Aviator Classic",
    img: "https://images.ray-ban.com/is/image/RayBan/8056597259835__002.png",
    prezzo: 195.0,
  },
  {
    id: 2,
    nome: "Clubmaster Classic",
    img: "https://images.ray-ban.com/is/image/RayBan/805289304456__002.png",
    prezzo: 145.0,
  },
  {
    id: 1,
    nome: "Wayfarer Classic",
    img: "https://images.ray-ban.com/is/image/RayBan/805289126577__002.png",
    prezzo: 145.0,
  },
  {
    id: 2,
    nome: "Round Metal",
    img: "https://images.ray-ban.com/is/image/RayBan/805289439899__002.png",
    prezzo: 145.0,
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="d-flex justify-content-center flex-wrap">
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
