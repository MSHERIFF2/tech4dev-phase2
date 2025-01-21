<template>
  <div class="flex"> 
    <component :is="currentLayout">   
      <RouterView/>   
    </component>    
    
  </div>
</template>

<script>
import AuthLayout from '@/layouts/AuthLayout.vue'
import DashBoardLayout from '@/layouts/DashBoardLayout.vue'
import {RouterView} from 'vue-router'

export default {
  components: {
    AuthLayout,
    DashBoardLayout,
    RouterView
  },

  computed: {
    currentLayout(){
     return this.$route.path.includes('SignUp') ? 'AuthLayout' : 'DashBoardLayout';
    }
  }
}

</script>