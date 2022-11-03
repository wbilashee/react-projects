const reducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return { ...state, loading: true };
        case "DISPLAY_ITEMS":
            return { ...state, cart: action.payload, loading: false };
        case "CLEAR_ITEMS":
            return { ...state, cart: [] };
        case "REMOVE_ITEM":
            return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) };
        case "TOGGLE_AMOUNT":
            let tempCart = state.cart.map(item => {
                if (item.id === action.payload.id) {
                    if (action.payload.type === "increase") {
                        return { ...item, amount: item.amount + 1 };
                    }
                    if (action.payload.type === "decrease") {
                        return { ...item, amount: item.amount - 1 };
                    }
                }
                return item;
            }).filter((item) => item.amount !== 0);
            return { ...state, cart: tempCart };
        case "GET_TOTALS":
            let { total, amount } = state.cart.reduce((total, item) => {
                const { price, amount } = item;
                const itemTotal = price * amount;

                total.total += itemTotal;
                total.amount += amount;
                return total;
            },
                {
                    total: 0,
                    amount: 0
                });
            total = parseFloat(total.toFixed(2));
            return { ...state, total, amount };
        default:
            return state;
    }
}

export default reducer;