<template>
  <div  v-if="modelValue" class="h-full flex flex-col  w-[25%] bg-white shadow-lg">
   <div class="w-auto mx-4 flex justify-between  mt-4">
    <h3>Wishlist</h3>
      <span class="cursor-pointer" @click="closeWishList" >x</span>
      
   </div>
   <div  class="mx-4 w-auto mt-1 bg-gray">
    <hr>
   </div>
   <div v-for="(product, index) in myWishStore.Product" :key="index">
    <img :src="product.image"/>
    {{product.description}}
    
   </div>

   
  </div>
</template>

<script setup>

defineProps({
modelValue: {
  type: Boolean,
  required: true
}
});
const emit = defineEmits(['update:modelValue'])
import {useStore} from '@/stores/WishStore'
import { onMounted } from 'vue';

const closeWishList = () => {
  emit('update:modelValue', false)
}
 const myWishStore = useStore()
 onMounted(() => {
  myWishStore.getProduct(1).then(() => {
    console.log(myWishStore.Product) // Log the updated Product array after fetching
  }).catch(err => console.log(err))
})
</script>
