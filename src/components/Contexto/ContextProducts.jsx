import { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import { TYPES } from "../Carrito/actions/action";
import { carritoReducer } from "../Carrito/reducer/CarritoReducer";


export const ProductosContext = createContext();

export const carritoEstadoInicial = {
    productos: [],
    carrito: [],
  };
  
export const ProductosProvider = (props) => {
  const [state, dispatch] = useReducer(carritoReducer, carritoEstadoInicial);

  const updateState = async () => {
    try {
      const productosURL = "http://localhost:3000/products";
      const carritotURL = "http://localhost:3000/carrito";
      // Promise.all para hacer las dos solicitudes a la vez y obtener las respuestas de forma paralela.
      // Esto puede mejorar el tiempo de carga en el caso de que las solicitudes sean lentas o se realicen en un servidor remoto.
      const [resProductos, resCarrito] = await Promise.all([
        axios.get(productosURL),
        axios.get(carritotURL),
      ]);
  
      const [newProduct, newCartItem] = await Promise.all([
        resProductos.data,
        resCarrito.data,
      ]);
  
      dispatch({ type: TYPES.READ_STATE, payload: [newProduct, newCartItem] });
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    updateState();
  }, []);
  
  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

 const deleteFromCart = (id, removeAll) => {
  if (removeAll === true) {
    dispatch({ type: TYPES.REMOVE_ALL_ITEMS, payload: id });
  } else {
    dispatch({ type: TYPES.REMOVE_ITEM, payload: id });
  }
};

  const clearCart = () => dispatch({ type: TYPES.CLEAR_CART });
  return (
    <ProductosContext.Provider
    value={{
      productos: state.productos,
      carrito: state.carrito,
      updateState,
      addToCart,
      deleteFromCart,
      clearCart,
      dispatch,
    }}
  >
    {props.children}
  </ProductosContext.Provider>
  );
};

export default ProductosProvider;