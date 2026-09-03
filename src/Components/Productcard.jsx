function ProductCard({ name, price, quantity, onAdd, onRemove, onAddToCart }) {
  return (
    <div>
      <h2>{name}</h2>

      <p>₹{price}</p>

      <button onClick={onRemove}>-</button>

      <span>{quantity}</span>

      <button onClick={onAdd}>+</button>

      <br />

   <button onClick={onAddToCart}>
  Add to Cart
</button>
    </div>
  );
}

export default ProductCard;