import { useState } from "react";
import Products from "../Products";
const ProductsList = ({
  filteredProducts,
  produtos,
  currentSale,
  setCurrentSale,
  aux,
  setAux,
}) => {
  return (
    <div>
      <div className="card-box">
        {filteredProducts.map((item) => (
          <Products
            key={item.id}
            item={item}
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            aux={aux}
            setAux={setAux}
          />
        ))}
      </div>
      <div></div>
    </div>
  );
};
export default ProductsList;
