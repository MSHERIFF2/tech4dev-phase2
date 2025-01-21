<template>
    <DashBoardLayout >
      <ProfileComponent/>
    </DashBoardLayout>
 </template>
 
 <script>
 
 import ProfileComponent from '@/components/ProfileComponent.vue';
 import DashBoardLayout from '@/layouts/DashBoardLayout.vue';
 export default {
    name: 'Profile',
    components: { DashBoardLayout, ProfileComponent }
 }
 </script>