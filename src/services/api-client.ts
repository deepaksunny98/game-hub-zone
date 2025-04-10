import axios, { CanceledError } from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "5b55744a5f244edebc436e1a55ee5161",
	},
});

export { CanceledError };
