import React, {useContext} from "react";
import { ProductosContext} from '../Contexto/ContextProducts'
import CardsLista from "../cards/CardsLista";


const Carrito = () => {
  //hook useReducer: función reductora + estado inicial
  const [state, dispatch] = useReducer(carritoReducer, carritoInitialState);
  //destructurar initial state (esto tengo en mi estado inicial)
  const { productos, carrito } = state;

  //funciones con las que voy a despachar las acciones
  const updateState = async () => {
    const productosURL = "http://localhost:3000/products";
    const cartURL = "http://localhost:3000/carrito";
    const resProductos = await axios.get(productosURL);
    const resCart = await axios.get(cartURL);
    //new product rta de los productos
    const newProduct = await resProductos.data;
    //newCartItem rta de
    const newCartItem = await resCart.data;

    dispatch({ type: TYPES.READ_STATE, payload: [newProduct, newCartItem] });
  };

  useEffect(() => {
    updateState();
  }, []);

  //agregar
  const addToCart = (id) => {
    //del objeto TYPES la funcion que quiero
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  //Borrar removeAll true
  const deleteFromCart = (id, removeAll) => {
    if (removeAll === true) {
      dispatch({ type: TYPES.REMOVE_ALL_ITEMS, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ITEM, payload: id });
    }
  };
  //vaciar carrito
  const clearCart = () => dispatch({ type: TYPES.CLEAR_CART });

  return (
    <div>
      {/* aca va lo que se va a ver en la pagina, los productos disponibles y los que agregue al carrito */}
      <div className="Container">
        <h1 className="oferta-tiempo">TODOS LOS PRODUCTOS</h1>
        <Row
          sm={1}
          md={2}
          lg={3}
          xl={4}
          className="g-4 justify-content-center  pb-4 pt-3"
        >
          {productos.map((producto) => (
            <Col>
              <CardsLista
                key={producto.id}
                data={producto}
                addToCart={addToCart}
              />
            </Col>
          ))}
        </Row>
      </div>

      <h2>Carrito</h2>
      <div>
        {carrito.map((item) => (
          <Item key={item.id} data={item} deleteFromCart={deleteFromCart} />
        ))}
      </div>

      <button onClick={() => clearCart()} className="btn btn-warning btn-sm">
        Limpiar Carrito
      </button>
    </div>
  );
};

export default Carrito;
