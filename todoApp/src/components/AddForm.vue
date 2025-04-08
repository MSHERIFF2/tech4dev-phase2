<template>
    <div class="flex justify-center">
<form @submit.prevent="handleSumbit" class="gap-x-8 flex">
    <input type="text" placeholder="type your to do here ..." v-model="todo">
    <input type="submit" value="Add" class="bg-orange-300 rounded p-2">
</form>
    </div>
</template>

<script setup>
import useTaskStore from '@/stores/TaskStore';
import { ref } from 'vue';

const todo = ref('')

const handleSumbit = (todo) => {
    useTaskStore.add(todo)

    todo.value = ''
}
</script>

