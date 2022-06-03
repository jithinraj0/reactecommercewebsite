// For Adding Item to Cart
export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}



// For Deleting Item From Cart
export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}