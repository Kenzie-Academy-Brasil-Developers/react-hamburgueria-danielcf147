const Cart = ({ item, currentSale, setCurrentSale }) => {
  const removeItem = currentSale.filter((value) => value.id !== item.id);

  return (
    <div className="cart-box">
      <div className="cart-box-item">
        <div className="img-cart">
          <img key={item.id} src={item.img} alt="" className="inner-img-cart" />
        </div>
        <div className="cart-outter">
          <p className="cart-item-name">{item.name}</p>
          <p className="cart-item-category">{item.category}</p>
        </div>
      </div>
      <div className="cart-item-remove-box">
        <button
          className="cart-item-remove"
          onClick={() => setCurrentSale(removeItem)}
        >
          Remover
        </button>
      </div>
    </div>
  );
};
export default Cart;
