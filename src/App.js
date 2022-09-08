import "./App.css";
import Product from "./Product/Product";

const products = [
  {
    id:1,
    nome: "Round Metal Optics",
    img: "https://images.ray-ban.com/is/image/RayBan/8053672357004__001.png",
    prezzo: 70.0,
  },
  {
    id:2,
    nome: "Clubmaster Optics",
    img: "https://images.ray-ban.com/is/image/RayBan/8053672195736__001.png",
    prezzo: 100.0,
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="d-flex justify-content-center flex-wrap">
          <Product {...products[0]}>
            <>Nuovo</>
          </Product>
          <Product {...products[1]} />
          {products.map(product => <Product key={product.id} {...product} />)}
        </div>
      </header>
    </div>
  );
}

export default App;
