export const endpoints = {
    getAll: 'products',
    getLimit: "products?limit=8",
    get_product_by_category: (category: string | undefined) => {
        if (category) {
            return 'products/category/' + category
        }
        else {
            return "products"
        }
    },
    get_categories: 'products/categories'
}