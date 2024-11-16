import type{ PageLoad } from "./$types"

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
}

export const load: PageLoad = async (loadEvent) => {
    const { fetch } = loadEvent;
    const title: string = "List of available products";
    try {
        const response = await fetch("http://localhost:4000/products");
        if (!response.ok)
            throw new Error(`Failed to fetch products: ${response.statusText}`);
        const products: Product[] = await response.json();
        return {
            title,
            products
        };
    } catch (error) {
        console.error(error);
        return {
            title,
            products: []
        };
    }
};
