<template>
    <div class="flex justify-between">
        <div>{{ tasks.task }}</div>
        <div class="flex gap-x-4">
            <span class="material-icons cursor-pointer" >
                delete
            </span>
            <span class="material-icons cursor-pointer " @click="isFav.toggleFav" :class="isFav.isFav? 'text-red-500' : 'text-gray-500'">
                favorite
            </span>

        </div>

    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import useTaskStore from '@/stores/TaskStore';

const tasks = defineProps(['task'])
const isFav = useTaskStore()
</script>
