import { defineStore } from 'pinia'

export const useCartStore = defineStore({
  id: 'cart',
  state:()=> ({
      cart: [],
  }),
  getters:{
    getCart: (state) => state.cart,
    getCartLength: (state) => state.cart.length,
  },
  actions: {
    addToCart(value: any) {
      this.cart.push(value)
    },
 },
})
