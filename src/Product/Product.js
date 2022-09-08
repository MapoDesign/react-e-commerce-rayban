import React from "react";

const Product = ({nome, img, prezzo, children}) => {
  const paramsHandle = (prezzo) => {
    console.log(prezzo);
  }
  const eventHandle = (e) => {
    console.log(e.target.innerText);
  }

  return (
    <section className="card m-2" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={`${nome}`} />
      <div className="card-body">
        <h4 className="card-title text-uppercase">{nome}</h4>
        <p>{children}</p>
    </div>
    <div className="card-footer">
        <button onClick={() => paramsHandle(prezzo)} href="#" className="btn btn-primary me-1">
          Price {prezzo} &euro; 
        </button>
        <button onClick={eventHandle} href="#" className="btn btn-primary">
          Buy
        </button>
      </div>
    </section>
  );
};

export default Product;
