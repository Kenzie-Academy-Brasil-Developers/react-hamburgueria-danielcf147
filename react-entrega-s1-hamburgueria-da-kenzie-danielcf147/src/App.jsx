import { useEffect, useState } from "react";
import "./App.css";
import ProductsList from "./Components/ProductsList";
import Cart from "./Components/Cart";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([...produtos]);
  const [inputFilter, setInputFilter] = useState("");
  const [todos, setTodos] = useState(false);
  const [currentSale, setCurrentSale] = useState([]);

  const filterPrice = currentSale.map((item) => item.price);
  const totalValue = filterPrice.reduce(
    (previous, current) => previous + current,
    0
  );

  useEffect(() => {
    fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
      .then((res) => res.json())
      .then((res) => {
        setProdutos([...res]);
        setFilteredProducts([...res]);
      })
      .catch((err) => console.log(err));
  }, [todos, inputFilter]);

  // useEffect(() =>{
  //   currentSale.forEach((value) => aux2.push(value.id));

  //   const set1 = new Set(aux);
  // },[currentSale])
  // console.log(currentSale);
  function showProducts() {
    const aux = inputFilter.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const filter = filteredProducts.filter(
      (item) =>
        item.name
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "") === aux.toLocaleLowerCase()
    );
    setFilteredProducts(filter);
  }

  return (
    <div className="outter-container">
      <div className="header">
        <img className="img" src="./icons/logo.svg" alt="" />
        <div className="search-box">
          <form
            className="form"
            onSubmit={(event) => showProducts(event.preventDefault())}
          >
            <input
              className="input-search"
              type="text"
              placeholder="Digitar Pesquisa"
              value={inputFilter}
              onChange={(event) => setInputFilter(event.target.value)}
            />
            <button className="search-btn">Pesquisar</button>
          </form>
        </div>
      </div>
      <div className="container">
        <div className="container-left">
          <ProductsList
            produtos={produtos}
            filteredProducts={filteredProducts}
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
          />
        </div>
        <div className="container-right">
          <div className="cart-header">
            <p>Carrinho de compras</p>
          </div>
          {currentSale.length > 0 ? (
            <div className="cart-item-true">
              <div className="cart-itens-inner">
                {currentSale.map((item) => (
                  <Cart
                    item={item}
                    key={item.id}
                    currentSale={currentSale}
                    setCurrentSale={setCurrentSale}
                  />
                ))}
              </div>
              <div className="div-line" />
              <div className="cart-total">
                <div className="total-box">
                  <p>Total</p>
                  <p className="total-value">R${Math.round(totalValue)}</p>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => setCurrentSale([])}
                >
                  Remover Todos
                </button>
              </div>
            </div>
          ) : (
            <div className="cart-item-false">
              <p className="cart-item-false-p1">Sua sacola está vazia</p>
              <p className="cart-item-false-p2">Adicione itens</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
