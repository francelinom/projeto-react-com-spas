import products from "../dataBase.json";

export default function loadProduct(params) {
    const product = products.find((p) => p.id === +params.params.productId);

    /**
     * Simulando erro
     */
    if (!product) {
        throw new Response("404 Not found", {status: 404})
    }

    return product;
}
