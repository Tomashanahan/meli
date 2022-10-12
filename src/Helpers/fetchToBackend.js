import { axiosApi } from "../AxiosConfig.js";

export const fetchData = async (url) => {
	try {
		const fetchInfo = await axiosApi.get(url);
    return fetchInfo.data
	} catch (error) {
    return error
	}
};
