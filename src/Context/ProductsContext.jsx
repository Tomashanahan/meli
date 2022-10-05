import { useReducer } from "react";
import { createContext } from "react";

export const ProductsContext = createContext();

const initialState = {
	searchedProduct: [],
	product_detail: {},
	product_description: "",
	seller_data: {},
	product_questions: [],
	product_opinions: [],
};

const actionstypes = {
	SEARCH_PRODUCT: "SEARCH_PRODUCT",
	PRODUCT_DETAIL: "PRODUCT_DETAIL",
	GET_PRODUCT_DESCRIPTION: "GET_PRODUCT_DESCRIPTION",
	SELLER_DATA: "SELLER_DATA",
	GET_PRODUCT_QUESTIONS: "GET_PRODUCT_QUESTIONS",
	GET_PRODUCT_OPINIONS: "GET_PRODUCT_OPINIONS",
	CLEAN_PRODUCT_DETAL: "CLEAN_PRODUCT_DETAL",
	CLEAN_SEARCHED_PRODUCT: "CLEAN_SEARCHED_PRODUCT",
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
		case actionstypes.GET_PRODUCT_QUESTIONS:
			return {
				...state,
				product_questions: payload,
			};
		case actionstypes.GET_PRODUCT_OPINIONS:
			return {
				...state,
				product_opinions: payload,
			};
		case actionstypes.PRODUCT_CURRENCY:
			return {
				...state,
				product_detail: { ...state.product_detail, currency_id: payload },
			};
		case actionstypes.CLEAN_PRODUCT_DETAL:
			return {
				...state,
				product_detail: {},
			};
		case actionstypes.CLEAN_SEARCHED_PRODUCT:
			return {
				...state,
				searchedProduct: {},
			};
		default:
			return state;
	}
};

export function ProductsProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	const {
		searchedProduct,
		product_detail,
		product_description,
		seller_data,
		product_questions,
		product_opinions,
	} = state;

	const searchProduct = async (productName) => {
		const products = await fetch(
			`https://api.mercadolibre.com/sites/MLA/search?q=${productName}`
		);
		const data = await products.json();
		return dispatch({
			type: actionstypes.SEARCH_PRODUCT,
			payload: data,
		});
	};

	const getProductDetail = async (productId) => {
		const product = await fetch(
			`https://api.mercadolibre.com/items/${productId}`
		);
		const productData = await product.json();

		const seller = await fetch(
			`https://api.mercadolibre.com/users/${productData.seller_id}`
		);
		const sellerData = await seller.json();

		const currency = await fetch(
			`https://api.mercadolibre.com/currencies/${productData.currency_id}`
		);
		const productCurrency = await currency.json();

		dispatch({ type: actionstypes.SELLER_DATA, payload: sellerData });
		dispatch({
			type: actionstypes.PRODUCT_DETAIL,
			payload: productData,
		});
		dispatch({
			type: actionstypes.PRODUCT_CURRENCY,
			payload: productCurrency,
		});
	};

	const getProductDescription = async (productId) => {
		const products = await fetch(
			`https://api.mercadolibre.com/items/${productId}/description?api_version=2`
		);
		const data = await products.json();
		return dispatch({
			type: actionstypes.GET_PRODUCT_DESCRIPTION,
			payload: data,
		});
	};

	const getProductQuestions = async (productId) => {
		const products = await fetch(
			`https://api.mercadolibre.com/questions/search?item=${productId}&api_version=4`
		);
		const data = await products.json();
		return dispatch({
			type: actionstypes.GET_PRODUCT_QUESTIONS,
			payload: data,
		});
	};

	const getProductOpinions = async (productId) => {
		const products = await fetch(
			`https://api.mercadolibre.com/reviews/item/${productId}`
		);
		const data = await products.json();
		return dispatch({
			type: actionstypes.GET_PRODUCT_OPINIONS,
			payload: data,
		});
	};

	const cleanProductDetal = () => {
		return dispatch({ type: actionstypes.CLEAN_PRODUCT_DETAL, payload: "" });
	};

	const cleanSearchedProduct = () => {
		return dispatch({ type: actionstypes.CLEAN_SEARCHED_PRODUCT, payload: "" });
	};

	const value = {
		searchedProduct,
		searchProduct,
		dispatch,
		getProductDetail,
		product_detail,
		getProductDescription,
		product_description,
		seller_data,
		getProductQuestions,
		product_questions,
		product_opinions,
		getProductOpinions,
		cleanProductDetal,
		cleanSearchedProduct,
	};
	return (
		<ProductsContext.Provider value={value}>
			{children}
		</ProductsContext.Provider>
	);
}
