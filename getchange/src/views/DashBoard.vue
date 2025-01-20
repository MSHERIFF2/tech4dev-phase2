<template>
   <DashBoardLayout>
     <Dashboard/>
   </DashBoardLayout>
</template>

<script>

import Dashboard from '@/components/Dashboard.vue';
import DashBoardLayout from '@/layouts/DashBoardLayout.vue';
export default {
   name: 'DashBoard',
   components: { DashBoardLayout, Dashboard }
}
</script>