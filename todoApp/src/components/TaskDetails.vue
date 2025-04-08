<template>
    <div class="flex justify-between">
        <div>{{ tasks.task }}</div>
        <div class="flex gap-x-4">
            <span class="material-icons cursor-pointer" >
                delete
            </span>
            <span class="material-icons cursor-pointer">
                favorite
            </span>

        </div>

    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const tasks = defineProps(['task'])
</script>
