<template>
  <div  v-if="modelValue" class="h-full  flex flex-col  w-[25%] bg-white shadow-lg">
    <div class="w-auto mx-4 flex justify-between  mt-4">
      <h3>Cart</h3>
      <span class="cursor-pointer" @click="closeCart" >x</span>
    </div>
     
    <div  class="mx-4 w-auto mt-1 bg-gray">
    <hr>
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

const closeCart = () => {
  emit('update:modelValue', false)
}

</script>
