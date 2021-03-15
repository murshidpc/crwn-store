export const addItemToCart = (cartItems, ItemToAdd) => {
    const existingItem = cartItems.find( item => item.id === ItemToAdd.id);

    if(existingItem) {
        return cartItems.map(item => 
            item.id === ItemToAdd.id ? { ...item , quantity: item.quantity + 1} : item 
        )
    }

    return [...cartItems, {...ItemToAdd, quantity :1}]
}          


export const removeItemFromCart = (cartItems, itemToRmove) => {
    return cartItems.filter(cartItem => cartItem.id !== itemToRmove.id);
}