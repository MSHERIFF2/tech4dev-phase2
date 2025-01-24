<template>
    <div class="shadow-xl  rounded-xl m-auto flex flex-col  p-6 w-full my-6">
        <div>
            <h1>Cart box</h1>
            <div v-if="Cart.length === 0"> Cart is empty</div>
            <ul v-for="(item, index) in Cart" :key="index">
                <li>{{ item.title }} - $ {{ item.price }} (x {{ item.quantity }}) - Total-${{ item.price * item.quantity }}
                    <button class="bg-red-500 text-white rounded mx-3 p-1" @click="removeFromCart(index)">Remove</button>
                </li>
            </ul>
        </div>
        <div class="flex  p-3">
            <button @click="listMode" class="bg-pink-500  rounded p-3">List view</button>
            <button @click="gridMode" class="bg-green-500 text-white rounded p-3 mx-4">Grid View</button>

        </div>
        <div>
            <ul v-if="viewMode === 'list'" v-for="product in products" :key="product.id"
                class="flex justify-around text-left gap-x-4 my-4 rounded items-center">
                <img :src="product.image" :alt="product.title" width="80" height="60">
                <li class="w-1/5 text-left">{{ product.title }}</li>
                <li class="w-2/5 text-justify">{{ product.description }}</li>
                <li>${{ product.price }}</li>
                <li>
                    <button class="bg-green-400 text-white rounded w-30 p-1" @click="addToCart(product)">Add to
                        Cart</button>
                </li>
            </ul>

        </div>
        <div class="grid grid-cols-3 gap-4">
            <ul v-if="viewMode === 'grid'" v-for="product in products" :key="product.id" class="col-span-1 justify-around 
              text-left gap-y-4 mx-4 rounded p-6 w-90">
                <img :src="product.image" :alt="product.title">
                <li class="bg-gray-900 text-white text-center">{{ product.title }}</li>
                <li class="text-justify">{{ product.description }}</li>
                <li class="rounded text-white text-center bg-green-900">${{ product.price }}</li>
            </ul>

        </div>



    </div>



</template>
<script>
export default {
    data() {
        return {
            viewMode: 'list',
            products: [],
            Cart: [],
        }
    },
    methods: {
        gridMode() {
            this.viewMode = 'grid'
        },
        listMode() {
            this.viewMode = 'list'
        },
        addToCart(product){
            const CartItem = this.Cart.find((item) => item.id === product.id)
                if (CartItem){
                    CartItem.quantity += 1

                }
                else{
                    this.Cart.push({...product, quantity: 1})
                }
            },
            removeFromCart(index){
                this.Cart.splice(index, 1)
            }
          
        
    },
    mounted() {
        fetch(`https://fakestoreapi.com/products/`)
            .then(res => res.json())
            .then(data => this.products = data)
            .catch(error => console.error(error))
    },

}

</script>