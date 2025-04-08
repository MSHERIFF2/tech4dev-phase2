<template>
  <div class="p-6 gap-y-4 h-screen  flex flex-col">
    <!-- Header section -->
<div class=" bg-green-900 p-6 flex gap-x-34">
  <span class="text-orange-300 text-xl font-bold">CODESH</span> 
  <h1 class="m-auto flex text-orange-300 text-xl font-semibold">To-do-App</h1>
</div>
<!-- task list -->
 <div class="flex gap-x-8 justify-end mx-64">
  <button class="bg-green-300 font-semibold rounded p-3 w-1/5">All</button>
  <button class="bg-green-300 font-semibold rounded p-3">favorite</button>
 </div>

 <!-- task count -->
  <div class="text-start mx-64 text-xl font-bold">
    <p>There are {{ task.favCount + 1 }} task</p>
  </div>
<!-- task Section -->
 <div class=" flex flex-col ">

 <TaskDetails  v-for="task in task.tasks" :key="task.id" :task="task.title"  class=" mx-auto mt-6 m w-3/5 flex  p-3 rounded bg-orange-200"/> 

  </div>
  </div>
</template>

<script setup>
import TaskDetails from './components/TaskDetails.vue';
import useTaskStore from './stores/TaskStore';

const task = useTaskStore()

</script>

