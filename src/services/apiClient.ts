import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "5b55744a5f244edebc436e1a55ee5161",
	},
});

class APIClient<T> {
	endpoint: string;
	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll = (requestConfig?: AxiosRequestConfig) => {
		return axiosInstance
			.get<T>(this.endpoint, requestConfig)
			.then((res) => res.data);
	};
	get = (id: string | number) => {
		return axiosInstance
			.get<T>(this.endpoint + "/" + id)
			.then((res) => res.data);
	};

	post = (data: T) => {
		return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
	};
}

export default APIClient;
