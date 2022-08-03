import { useEffect, useState } from "react";

const Products = ({ item, currentSale, setCurrentSale }) => {
  let aux2 = [];
  const [aux, setAux] = useState("false");

  useEffect(() => {
    currentSale.forEach((value) => aux2.push(value.id));
    const set1 = new Set(aux2);
    set1.has(item.id) ? setAux("true") : setAux("false");
  }, [currentSale]);

  return (
    <div className="card">
      <div className="img-box">
        <img className="container-img" src={item.img} alt="" />
      </div>
      <div className="box-card-text">
        <p className="name-card-text">{item.name}</p>
        <p className="category-card-text">{item.category}</p>
        <p className="price-card-text">R$ {item.price}</p>
        {aux === "false" ? (
          <button
            className="btn-card-text"
            onClick={() => setCurrentSale((old) => [...old, item])}
          >
            Adicionar
          </button>
        ) : (
          <button
            className="btn-card-text"
            onClick={() => alert("Não é possivel adicionar produto duplicado.")}
          >
            Adicionar
          </button>
        )}
      </div>
    </div>
  );
};
export default Products;
