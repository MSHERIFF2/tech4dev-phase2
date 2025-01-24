<template>
   <div class="shadow-xl  rounded-xl m-auto flex flex-col  p-6 w-full my-6">
        <div class="flex  p-3">
            <button @click="listMode" class="bg-pink-500  rounded p-3">List view</button>
            <button @click="gridMode" class="bg-green-500 text-white rounded p-3 mx-4">Grid View</button>
            
        </div>
        <div>
            <ul v-if="viewMode === 'list'" v-for="product in products" :key="product.id"
                class="flex justify-around text-left gap-x-4 my-4 rounded">
                <img :src="product.image" :alt="product.title" width="80" height="80">
                <li>{{product.title}}</li>
                <li>{{product.description}}</li>
                <li>${{product.price}}</li>
            </ul>

        </div>
        <div class="grid grid-cols-3 gap-4">
            <ul v-if="viewMode === 'grid' " v-for="product in products" :key="product.id" class="col-span-1 justify-around 
              text-left gap-y-4 mx-4 rounded p-6 w-90">
                <img :src="product.image" :alt="product.title">
                <li>{{product.title}}</li>
                <li>{{product.description}}</li>
                <li>${{product.price}}</li>
            </ul>

        </div>



    </div>
    
        
   
</template>
<script>
      export default {
            data() {
                return {
                    viewMode: 'list',
                    products:[ ],
                }
            },
            methods: {
                gridMode() {
                    this.viewMode = 'grid'
                },
                listMode() {
                    this.viewMode = 'list'
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