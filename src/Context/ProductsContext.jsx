import { useReducer } from "react";
import { createContext } from "react";

export const ProductsContext = createContext();

const initialState = {
	searchedProduct: [],
	product_detail: {},
	product_description: "",
	seller_data: {},
};

const actionstypes = {
	SEARCH_PRODUCT: "SEARCH_PRODUCT",
	PRODUCT_DETAIL: "PRODUCT_DETAIL",
	GET_PRODUCT_DESCRIPTION: "GET_PRODUCT_DESCRIPTION",
	SELLER_DATA: "SELLER_DATA",
};

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actionstypes.SEARCH_PRODUCT:
			return {
				...state,
				searchedProduct: payload,
			};
		case actionstypes.PRODUCT_DETAIL:
			return {
				...state,
				product_detail: payload,
			};
		case actionstypes.GET_PRODUCT_DESCRIPTION:
			return {
				...state,
				product_description: payload,
			};
		case actionstypes.SELLER_DATA:
			return {
				...state,
				seller_data: payload,
			};
		default:
			return state;
	}
};

export function ProductsProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { searchedProduct, product_detail, product_description, seller_data } = state;

	const searchProduct = async (productName) => {
		const products = await fetch(
			`https://api.mercadolibre.com/sites/MLA/search?q=${productName}`
		);
		const data = await products.json();
		return dispatch({
			type: actionstypes.SEARCH_PRODUCT,
			payload: data.results,
		});
	};

	const getProduct = async (productId) => {
		const product = await fetch(
			`https://api.mercadolibre.com/items/${productId}`
		);
		const productData = await product.json();

		const seller = await fetch(
			`https://api.mercadolibre.com/users/${productData.seller_id}`
		);
		const sellerData = await seller.json();
    
		dispatch({ type: actionstypes.SELLER_DATA, payload: sellerData });
		return dispatch({ type: actionstypes.PRODUCT_DETAIL, payload: productData });
	};

	const getProductDescription = async (productId) => {
		const products = await fetch(
			// `https://api.mercadolibre.com/items/${productId}/description`
			`https://api.mercadolibre.com/items/${productId}/description?api_version=2`
		);
		const data = await products.json();
		return dispatch({
			type: actionstypes.GET_PRODUCT_DESCRIPTION,
			payload: data,
		});
	};

	const value = {
		searchedProduct,
		searchProduct,
		dispatch,
		getProduct,
		product_detail,
		getProductDescription,
		product_description,
    seller_data,
	};
	return (
		<ProductsContext.Provider value={value}>
			{children}
		</ProductsContext.Provider>
	);
}
