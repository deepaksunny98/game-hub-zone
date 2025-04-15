// src/hooks/useData.ts
import { useState, useEffect } from "react";
import { AxiosRequestConfig, CanceledError } from "axios";
import createHttpService from "../services/http-service";

interface FetchResponse<T> {
	count: number;
	results: T[];
}

const useData = <T>(
	endpoint: string,
	requestConfig?: AxiosRequestConfig,
	deps?: unknown[]
) => {
	const [data, setData] = useState<T[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState(false);

	useEffect(
		() => {
			setLoading(true);

			const service = createHttpService(endpoint);
			const { request, cancel } =
				service.getAll<FetchResponse<T>>(requestConfig);

			request
				.then((res) => {
					setData(res.data.results);
					setLoading(false);
				})
				.catch((err) => {
					if (err instanceof CanceledError) return;
					setError(err.message);
					setLoading(false);
				});

			return () => cancel();
		},
		deps ? [...deps] : []
	);

	return { data, error, isLoading };
};
export default useData;
