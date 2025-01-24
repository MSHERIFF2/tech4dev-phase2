<template>
    <div class="grid grid-cols-2 p-8">
        <div v-for="product in products" :key="product.id" class="col-span-1 border-pink-900 border-4 p-8 text-[#d3f4d5]">
            <img :src='product.image' width="160" height="160"/>
            <figcaption>{{product.title}}</figcaption>

        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            products: {}
        }
    },
    mounted() {
        fetch(`https://fakestoreapi.com/products/`)
            .then(res => res.json())
            .then(data => this.products = data)
            .catch(error => console.error(error))
    },

    methods: {
        message() {
            alert("Add to cart Successfully")
        }
    }

}
</script>