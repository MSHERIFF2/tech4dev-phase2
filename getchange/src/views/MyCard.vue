<template>
   <div class="shadow-xl shadow-gray-300 rounded-xl m-auto flex flex-col  p-6 w-full my-6">
        <div class="flex gap-x-8 p-3">
            <button @click="listMode" class="bg-gray-600 text-white rounded p-3">List view</button>
            <button @click="gridMode" class="bg-green-500 text-white rounded p-3">Grid View</button>
            
        </div>
        <div >
            <ul v-if="viewMode === 'list'" v-for="product in products" :key="product.id"
                class="flex justify-around   text-left gap-x-4 my-4 rounded">
                <img :src="product.image" :alt="product.title">
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
                    products:
                        [
                            {
                                "id": 1,
                                "title": "Wireless Headphones",
                                "description": "High-quality wireless headphones with noise-cancellation and 20-hour battery life.",
                                "price": 99.99,
                                "image": "https://via.placeholder.com/150/0000FF/FFFFFF?text=Headphones"
                            },
                            {
                                "id": 2,
                                "title": "Smartphone",
                                "description": "A sleek and powerful smartphone with a stunning display and advanced camera.",
                                "price": 699.99,
                                "image": "https://via.placeholder.com/150/008000/FFFFFF?text=Smartphone"
                            },
                            {
                                "id": 3,
                                "title": "Gaming Laptop",
                                "description": "A high-performance gaming laptop with a dedicated GPU and fast refresh rate.",
                                "price": 1299.99,
                                "image": "https://via.placeholder.com/150/FF0000/FFFFFF?text=Laptop"
                            },
                            {
                                "id": 4,
                                "title": "Bluetooth Speaker",
                                "description": "Compact and portable Bluetooth speaker with rich sound and deep bass.",
                                "price": 49.99,
                                "image": "https://via.placeholder.com/150/FFFF00/000000?text=Speaker"
                            },
                            {
                                "id": 5,
                                "title": "Smart Watch",
                                "description": "A stylish smart watch with fitness tracking and notifications support.",
                                "price": 199.99,
                                "image": "https://via.placeholder.com/150/000000/FFFFFF?text=Smart+Watch"
                            },
                            {
                                "id": 6,
                                "title": "Digital Camera",
                                "description": "Compact digital camera with 20MP sensor and 4K video recording.",
                                "price": 499.99,
                                "image": "https://via.placeholder.com/150/808080/FFFFFF?text=Camera"
                            },
                            {
                                "id": 7,
                                "title": "Wireless Keyboard",
                                "description": "Slim and ergonomic wireless keyboard with long battery life.",
                                "price": 29.99,
                                "image": "https://via.placeholder.com/150/800080/FFFFFF?text=Keyboard"
                            },
                            {
                                "id": 8,
                                "title": "Running Shoes",
                                "description": "Lightweight and comfortable running shoes with excellent grip and support.",
                                "price": 89.99,
                                "image": "https://via.placeholder.com/150/FF69B4/FFFFFF?text=Shoes"
                            },
                            {
                                "id": 9,
                                "title": "Electric Toothbrush",
                                "description": "Rechargeable electric toothbrush with multiple brushing modes.",
                                "price": 39.99,
                                "image": "https://via.placeholder.com/150/00FFFF/000000?text=Toothbrush"
                            },
                            {
                                "id": 10,
                                "title": "Backpack",
                                "description": "Durable and spacious backpack with multiple compartments for organization.",
                                "price": 59.99,
                                "image": "https://via.placeholder.com/150/FFA500/000000?text=Backpack"
                            }
                        ],





                }
            },
            methods: {
                gridMode() {
                    this.viewMode = 'grid'
                },
                listMode() {
                    this.viewMode = 'list'
                }
            }

        }
        
    </script>