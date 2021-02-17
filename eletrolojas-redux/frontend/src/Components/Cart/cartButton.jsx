import { useSelector } from "react-redux";
import CartModal from "./cartModal";

const CartButton = () => {
  const value = useSelector((state) => state.cart.value);

  return (
    <>
      <button
        type="button"
        className="btn btn-lg btn-primary"
        data-toggle="modal"
        data-target="#cartModal"
      >
        <i className="fas fa-shopping-cart"></i> {value}
      </button>
      <CartModal />
    </>
  );
};

export default CartButton;
