import { useSelector, useDispatch } from "react-redux";
import cartActions from "../store/actions/cart";

const CartModal = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.cart.value);
  const produtos = useSelector((state) => state.cart.Carts);

  let totalPrice = 0;
  for (let i = 0; i < produtos.length; i++) {
    totalPrice += produtos[i].preco * produtos[i].quantity;
  }

  return (
    <div
      className="modal fade"
      id="cartModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="cartModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-center" id="cartModalLabel">
              Cart
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Fechar"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Produto</th>
                    <th scope="col">Qtd</th>
                    <th scope="col"></th>
                    <th scope="col">R$ Un.</th>
                    <th scope="col">R$ Total</th>
                  </tr>
                </thead>
                <tbody>
                  {produtos.map((produto) => {
                    const total = (produto.preco * produto.quantity).toFixed(2);
                    return (
                      <tr key={produto.id}>
                        <td>
                          <button
                            onClick={() =>
                              dispatch(cartActions.Delete(value, produto))
                            }
                            className="btn badge badge-danger"
                          >
                            <i className="far fa-trash-alt"></i>
                          </button>
                        </td>
                        <td>{produto.name}</td>
                        <td>{produto.quantity}</td>
                        <td>
                          <button
                            onClick={() =>
                              dispatch(cartActions.AddItem(value, produto))
                            }
                            className="btn badge badge-success"
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                          <button
                            onClick={() =>
                              dispatch(cartActions.Remove(value, produto))
                            }
                            className="btn badge badge-warning"
                          >
                            <i className="fas fa-minus"></i>
                          </button>
                        </td>
                        <td>R$ {produto.preco.toFixed(2)}</td>
                        <td>R$ {total}</td>
                      </tr>
                    );
                  })}
                  <tr>
                    <th colSpan="2" scope="row">
                      <h5>Total</h5>
                    </th>
                    <td>
                      <h5>{value}</h5>
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                      <h5>R$ {totalPrice.toFixed(2)}</h5>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-dark" data-dismiss="modal">
              Continuar comprando
            </button>
            <button type="button" className="btn btn-success">
              Finalizar compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
