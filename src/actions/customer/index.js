import firebase from "../../firebase";
import { createActionSet } from "../../helpers";
import { push } from "connected-react-router";

const productRef = firebase.db.collection("products");

export const FETCH_PRODUCTS = createActionSet("FETCH_PRODUCTS");
export const FETCH_PRODUCT_DETAIL = createActionSet("FETCH_PRODUCT_DETAIL");
export const CREATE_PRODUCT = createActionSet("CREATE_PRODUCT");
export const UPDATE_PRODUCT = createActionSet("UPDATE_PRODUCT");
export const DELETE_PRODUCT = createActionSet("DELETE_PRODUCT");

export const findById = id => async dispatch => {
  dispatch({
    type: FETCH_PRODUCTS.PENDING
  });
  try {
    const product = await productRef.doc(id).get();
    dispatch({
      type: FETCH_PRODUCT_DETAIL.SUCCESS,
      payload: product.data()
    });
  } catch (error) {
    dispatch({
      type: FETCH_PRODUCTS.FAILED,
      error
    });
  }
};

export const findAll = () => async dispatch => {
  dispatch({
    type: FETCH_PRODUCTS.PENDING
  });

  try {
    const products = await productRef.orderBy("price").get();
    const payload = products.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      };
    });
    dispatch({
      type: FETCH_PRODUCTS.SUCCESS,
      payload
    });
  } catch (error) {
    dispatch({
      type: FETCH_PRODUCTS.FAILED,
      error
    });
  }
};

export const createProduct = data => async dispatch => {
  dispatch({
    type: CREATE_PRODUCT.PENDING
  });
  try {
    const response = await productRef.add(data);
    dispatch({
      type: CREATE_PRODUCT.SUCCESS,
      payload: response
    });
    dispatch(push("/stock"));
  } catch (error) {
    dispatch({
      type: CREATE_PRODUCT.FAILED,
      error
    });
  }
};

export const updateProduct = (id, data) => async dispatch => {
  dispatch({
    type: UPDATE_PRODUCT.PENDING
  });
  try {
    await productRef.doc(id).update(data);
    dispatch({
      type: UPDATE_PRODUCT.SUCCESS
    });
    dispatch(push("/stock"));
  } catch (error) {
    dispatch({
      type: UPDATE_PRODUCT.FAILED,
      error
    });
  }
};

export const deleteProduct = id => async dispatch => {
  dispatch({
    type: DELETE_PRODUCT.PENDING
  });
  try {
    await productRef.doc(id).delete();
    dispatch({
      type: DELETE_PRODUCT.SUCCESS
    });
    dispatch(push("/stock"));
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT.FAILED,
      error
    });
  }
};
