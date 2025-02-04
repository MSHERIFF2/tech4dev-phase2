<template>
  <div class="text-center items-center p-12 flex justify-between w-full h-full ">
    <div>
      <h1 class="text-3xl text-gray-900">{{msg.msg}}</h1>
    </div>
    
    <div class="w-2/5 flex justify-between p-6">
      <ul v-for="navitem in msg.navbar" :key="navitem">
        <li class="text-xl text-gray-400">{{ navitem }}</li>
      </ul>
    </div>
    <div class="flex justify-arouund items-center text-black w-1/5 gap-x-4">
      <i>Icon1</i>
      <i>Icon2</i>
      <i>Icon3</i>
      <i>Icon3</i>
    </div>
  </div>
   
    
</template>

<script setup>
import { ref } from 'vue';

const msg = ref({
  msg:'LEZADA',
  navbar: ['Home', 'Shop', 'Elements', 'Pages', 'Blog' ]
})

</script>

