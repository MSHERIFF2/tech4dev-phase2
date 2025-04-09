<template>
  <div class=" gap-y-2 h-screen  flex flex-col">
    <!-- Header section -->
<div class=" bg-green-900 p-6 flex gap-x-34">
  <span class="text-orange-300 text-xl font-bold">CODESH</span> 
  <h1 class="m-auto flex text-orange-300 text-xl font-semibold">To-do-App</h1>
</div>
<div>
  <AddForm />
</div>
<!-- task list -->
 <div class="flex gap-x-8 justify-end mx-64">
  <button class="bg-green-300 font-semibold rounded p-2 w-1/5" @click="showWhat = 'all'">All</button>
  <button class="bg-green-300 font-semibold rounded p-2" @click="showWhat = 'fav'">favorite</button>
 </div>

 <!-- All count -->
  <div class="text-start mx-64 text-xl font-bold" v-if="showWhat === 'all'">
    <p>There are {{ task.allCount }} task</p>
  </div>
  <!-- Favorite Count -->
  <div class="text-start mx-64 text-xl font-bold" v-if="showWhat === 'fav'">
    <p>There are {{ task.favCount }} task</p>
  </div>
<!-- All task  Section -->
 <div class=" flex flex-col ">

 <TaskDetails  v-for="task in task.tasks" :key="task.id" :task="task.title"  class=" mx-auto mt-6 m w-3/5 flex  p-3 rounded bg-orange-200"/> 

  </div>
  <!-- Fav task section -->
 <div class=" flex flex-col " v-if="task.favs">

 <TaskDetails  v-for="task in task.tasks" :key="task.id" :task="task.isFav"  class=" mx-auto mt-6 m w-3/5 flex  p-3 rounded bg-orange-200"/> 

  </div>
  </div>
</template>

<script setup>
import TaskDetails from './components/TaskDetails.vue';
import useTaskStore from './stores/TaskStore';
import AddForm from './components/AddForm.vue';
import { ref } from 'vue';

const task = useTaskStore()
const showWhat = ref('all')

</script>

