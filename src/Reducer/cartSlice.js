import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
const initialState = {
    cart: JSON.parse(localStorage.getItem('items')) || [],
    grand: JSON.parse(localStorage.getItem('Total')) || '',
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        AddTocart: (state, actions) => {
            let temp = actions.payload
            let filterdata = state.cart.filter((item) => {
                return item.id == temp.id
            })
            if (filterdata.length == 0) {
                temp['qty'] = 1;
                temp['qtyori'] = 1;
                temp['total'] = temp.price;
                state.cart.push(temp)
                let Alltot = 0;
                state.cart.map((item) => {
                    Alltot += item.total;
                })
                state.grand = Alltot
                toast.success(`${temp.title} Added successfully`, {
                    position: 'bottom-left',
                    pauseOnHover: true,
                    theme: "dark",
                    autoClose: 1500,
                })
                localStorage.setItem('Total', state.grand);
                localStorage.setItem('items', JSON.stringify(state.cart));

            }
            else {
                toast.warning(`${temp.title} Already in Cart`, {
                    position: 'bottom-left',
                    pauseOnHover: true,
                    theme: "dark",
                    autoClose: 1500,
                })
            }
        },
        Removecart: (state, action) => {
            state.cart = state.cart.filter((items, index) => {
                return index != action.payload
            })
            let Alltot = 0;
            state.cart.map((item) => {
                Alltot += item.total;
            });
            state.grand = Alltot;
            localStorage.setItem('Total', state.grand);
            localStorage.setItem('items', JSON.stringify(state.cart));
            window.location.reload(true)

        },
        incrementCart: (state, actions) => {
            let temp = state.cart;
            let act = actions.payload;
            temp[act].qty += 1;
            temp[act].total = temp[act].price * temp[act].qty;
            let Alltot = 0;
            state.cart.map((item) => {
                Alltot += item.total
            })
            state.grand = Alltot
            localStorage.setItem('Total', state.grand);
            localStorage.setItem('items', JSON.stringify(state.cart));

        },
        decrement: (state, actions) => {
            let temp = state.cart;
            let act = actions.payload;
            if (temp[act].qty > 1) {
                temp[act].qty -= 1;
                temp[act].total = temp[act].price * temp[act].qty;
                let Alltot = 0;
                state.cart.map((item) => {
                    Alltot += item.total
                })
                state.grand = Alltot
                localStorage.setItem('Total', state.grand);
                localStorage.setItem('items', JSON.stringify(state.cart));

            }
            else {
                state.cart = state.cart.filter((i, v) => {
                    return v != act
                })
                let Alltot = 0;
                state.cart.map((item) => {
                    Alltot += item.total
                })
                state.grand = Alltot
                localStorage.setItem('Total', state.grand);
                localStorage.setItem('items', JSON.stringify(state.cart));

            }
        },
    },
})
// Action creators are generated for each case reducer function
export const { incrementCart, decrement, incrementByAmount, AddTocart, Removecart } = counterSlice.actions
export default counterSlice.reducer