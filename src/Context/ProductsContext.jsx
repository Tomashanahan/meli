import { useReducer } from "react";
import { createContext } from "react";
import { fetchData } from "../Helpers/fetchToBackend";

export const ProductsContext = createContext();

const initialState = {
	searchedProduct: [],
	product_detail: {},
	product_description: "",
	seller_data: {},
	product_questions: [],
	product_opinions: [],
	paginationOffset: 0,
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
	SORT_PRODUCTS_SEARCHED: "SORT_PRODUCTS_SEARCHED",
	FILTER_PRODUCTS_SEARCHED: "FILTER_PRODUCTS_SEARCHED",
	NEXT_PAGE_IN_SEARCHED_PRODUCTS: "NEXT_PAGE_IN_SEARCHED_PRODUCTS",
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
		case actionstypes.SORT_PRODUCTS_SEARCHED:
			return {
				...state,
				searchedProduct: payload,
			};
		case actionstypes.FILTER_PRODUCTS_SEARCHED:
			return {
				...state,
				searchedProduct: payload,
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
		const products = await fetchData(`/sites/MLA/search?q=${productName}`);
		return dispatch({
			type: actionstypes.SEARCH_PRODUCT,
			payload: products,
		});
	};

	const getProductDetail = async (productId) => {
		const product = await fetchData(`/items/${productId}`);
		const seller = await fetchData(`/users/${product.seller_id}`);
		const currency = await fetchData(`/currencies/${product.currency_id}`);

		dispatch({ type: actionstypes.SELLER_DATA, payload: seller });
		dispatch({
			type: actionstypes.PRODUCT_DETAIL,
			payload: product,
		});
		dispatch({
			type: actionstypes.PRODUCT_CURRENCY,
			payload: currency,
		});
	};

	const getProductDescription = async (productId) => {
		const products = await fetchData(
			`/items/${productId}/description?api_version=2`
		);
		return dispatch({
			type: actionstypes.GET_PRODUCT_DESCRIPTION,
			payload: products,
		});
	};

	const getProductQuestions = async (productId) => {
		const products = await fetchData(
			`/questions/search?item=${productId}&api_version=4`
		);
		return dispatch({
			type: actionstypes.GET_PRODUCT_QUESTIONS,
			payload: products,
		});
	};

	const getProductOpinions = async (productId) => {
		const products = await fetchData(`/reviews/item/${productId}`);
		return dispatch({
			type: actionstypes.GET_PRODUCT_OPINIONS,
			payload: products,
		});
	};

	const cleanProductDetal = () => {
		return dispatch({ type: actionstypes.CLEAN_PRODUCT_DETAL, payload: "" });
	};

	const cleanSearchedProduct = () => {
		return dispatch({ type: actionstypes.CLEAN_SEARCHED_PRODUCT, payload: "" });
	};

	const sortProductsSearched = async (sortID) => {
		const products = await fetchData(`/sites/MLA/search${sortID}`);
		return dispatch({
			type: actionstypes.SORT_PRODUCTS_SEARCHED,
			payload: products,
		});
	};

	const filterProductsSearched = async (info) => {
		const products = await fetchData(`/sites/MLA/search${info}`);
		return dispatch({
			type: actionstypes.FILTER_PRODUCTS_SEARCHED,
			payload: products,
		});
	};

	const value = {
		searchedProduct,
		product_detail,
		product_description,
		seller_data,
		product_questions,
		product_opinions,
		searchProduct,
		dispatch,
		getProductDetail,
		getProductDescription,
		getProductQuestions,
		getProductOpinions,
		cleanProductDetal,
		cleanSearchedProduct,
		sortProductsSearched,
		filterProductsSearched,
	};
	return (
		<ProductsContext.Provider value={value}>
			{children}
		</ProductsContext.Provider>
	);
}
