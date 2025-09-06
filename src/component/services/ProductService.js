import {api} from "./api.js";

export const getDistinctProductByName = async () => {
    try {
        console.log("service");
        const response = await api.get("/products/distinct/products");

        const products = response.data;

       return products;
    } catch (error) {
        console.error("Erro no service:", error);
        throw error;
    }
};