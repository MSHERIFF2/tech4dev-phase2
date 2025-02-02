<template>
    <div class="shadow-xl  rounded-xl m-auto flex flex-col flex-grow h-screen overflow-y-auto p-6 w-full my-6">
        <div >
            <h1>Cart box</h1>
            <div v-if="Cart.length === 0"> Cart is empty</div>
            <ul v-for="(item, index) in Cart" :key="index">
                <li>{{ item.title }} - $ {{ item.price }} (x {{ item.quantity }}) - Total-${{ item.price * item.quantity }}
                    <button class="bg-red-500 text-white rounded mx-3 p-1" @click="removeFromCart(index)">Remove</button>
                </li>
            </ul>
        </div>
        <div class="flex  p-3" >
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
                <li class="flex flex-col gap-y-2">
                    <button class="bg-green-500 text-white rounded w-30 p-1" @click="addToCart(product)">Add to
                        Cart</button>
                    <button class="bg-red-500 text-white rounded w-30 p-1" @click="removeOneFromCart(product)">Remove from
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
<script setup>
import {ref,  onMounted} from 'vue'

            const viewMode = ref('list')
            const products = ref([])
            const Cart = ref([])
   
 
      const  gridMode = () => {
            viewMode.value = 'grid'
        }
       const listMode = () => {
            viewMode.value = 'list'
        }
       const addToCart = (product) => {
            const CartItem = Cart.value.find((item) => item.id === product.id)
                if (CartItem){
                    CartItem.quantity += 1

                }
                else{
                    Cart.value.push({...product, quantity: 1})
                }
            }
      const  removeOneFromCart = (product) =>{
            const CartItem = Cart.value.find((item) => item.id === product.id)
                if (CartItem){
                    if (CartItem.quantity > 0){
                        CartItem.quantity -= 1
                    } else if(CartItem.quantity === 0){
                        removeFromCart()
                    }
                    else{
                        CartItem.splice(index, 1)

                    }
                   

                }
                
            }
          const  removeFromCart = (index) => {
                Cart.value.splice(index, 1)
            }
          
        

    onMounted (() => {
        fetch(`https://fakestoreapi.com/products/`)
            .then(res => res.json())
            .then(data => products.value = data)
            .catch(error => console.error(error))
    })

</script>