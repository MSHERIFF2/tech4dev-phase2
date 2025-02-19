import axios from 'axios'

const api_url = ''

const api = axios.create({
    baseURL: api_url,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    if (token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
})

export const authService = {
    register(userData){
        return api.post("/register", userData)
    },
    login(credentials){
        return api.post("/login", credentials).then((response) => {
            if (response.data.token){
                localStorage.setItem("token", response.data.token)
            }
            return response;
        })
    },
    logout() {
        return api.post("/logout").finally(()=> {
            localStorage.removeItem("token")
        })
    },
    getUserProfile() {
        return api.get("/user")
    }
}

export const productService = {
    getProducts() {
        return api.get("/products")
    },
    getProduct(id){
        return api.get(`/produuct/${id}`)
    }
}

export const cartService = {
    getCart(){
        return api.get("/cart")
    },
    addToCart(product_id, quantity){
        return api.post("/cart/add", {product_id, quantity})
    },
    updateCartItem(cart_id, quantity){
        return api.put(`/cart/${cart_id}`, {quantity})
    },
    removeFromCart(cart_id){
        return api.delete(`/cart/${cart_id}`)
    }
}

export const wishlistService = {
    getWishlist() {
      return api.get("/wishlist");
    },
    addToWishlist(product_id) {
      return api.post("/wishlist/add", { product_id });
    },
    removeFromWishlist(wishlist_id) {
      return api.delete(`/wishlist/${wishlist_id}`);
    },
  };
  export const orderService = {
    getOrders() {
      return api.get("/orders");
    },
    checkout(orderData) {
      return api.post("/orders/checkout", orderData);
    },
  };