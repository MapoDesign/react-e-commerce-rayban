import React, { useState } from "react";

const Product = ({ nome, img, prezzo, children }) => {
  const [toggle, setToggle] = useState(true);
  const imgStyle = {
    minHeight: "186px",
    display: "flex",
    alignItems: "center",
  };

  const paramsHandle = (nome, prezzo) => {
    console.log("Inserito nel carrello " + nome + " a " + prezzo + "€");
    setToggle(!toggle);
  };
  const removeParamsHandle = (nome) => {
    console.log("Rimosso " + nome + " dal carrello");
    setToggle(!toggle);
  };
  const eventHandle = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <section className="card m-2" style={{ width: "18rem" }}>
      <div style={imgStyle}>
        <img src={img} className="card-img-top" alt={`${nome}`} />
      </div>
      <div className="card-body">
        <h4 className="card-title text-uppercase">{nome}</h4>
        <p>{children}</p>
      </div>
      <div className="card-footer">
        {toggle ? (
          <button
            onClick={() => paramsHandle(nome, prezzo)}
            href="#"
            className="btn btn-primary me-1"
          >
            Buy {nome}
          </button>
        ) : (
          <button
            onClick={() => removeParamsHandle(nome, prezzo)}
            href="#"
            className="btn btn-primary me-1"
          >
            Remuve {nome}
          </button>
        )}
      </div>
    </section>
  );
};

export default Product;
