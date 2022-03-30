const cartActions = {
    addToCart:'addToCart',
    removeFromCart:'removeFromCart',
    emptyCart:'emptyCart',
}

function cartReducer(cart, {type, item}){
    switch(type){
        case cartActions.addToCart:
            return [...cart, item];
        case cartActions.removeFromCart:
            let newCart = cart.slice()
            for (let cartItem of newCart){
                if (cartItem.id === item.id){
                    newCart.splice(newCart.indexOf(cartItem),1)
                    return newCart
                }
            }
            return newCart;
        case cartActions.emptyCart:
            return []
        default:
            throw new Error('What do?')
    }       
}

export {
    cartReducer,
    cartActions
}