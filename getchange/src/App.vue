<template>
  <div class="flex"> 
    <component :is="currentLayout">   
      <RouterView/>   
    </component>    
   
  </div>
</template>



<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

// Import the layout components
import DashBoardLayout from '@/layouts/DashBoardLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';

// Get the current route
const route = useRoute();

// Compute the layout based on the current route
const currentLayout = computed(() => {
  return route.path.includes('app') ? DashBoardLayout : AuthLayout;
});
</script>

