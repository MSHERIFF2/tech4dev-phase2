<template>
    <div>
        <h2>Products</h2>
        <p v-if="loading">Loading products...</p>
        <p v-else-if="error">{{ error }}</p>
        <ul v-else-if="products.length">
            <li v-for="product in products" :key="product.id">{{ product.name }}- ${{ product.price }}</li>
        </ul>
   

        <p v-else>No products available</p>
    </div>
</template>
<script setup>
import { productService } from '@/services/api';
import { onMounted, ref } from 'vue';
const products = ref([])
const error = ref(null)
const loading = ref(true)

const fetchProducts = async () => {
    try {

        const response = await productService.getProducts()
        products.value = response.data
    } catch (error) {
    error.value = error.message || "Failed to fetch products"
    } finally{
        loading.value = false
    }
}

onMounted(fetchProducts);


</script>