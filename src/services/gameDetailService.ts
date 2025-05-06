import APIClient from "./apiClient";
import { Games } from "./gameService";

export default new APIClient<Games>("/games");
