<template>
<div class="w-2/5 left-1/2 transition -transition-x-1/2">
    <ul>
        <li v-for="item in menu" :key="item">
            {{item}}
        </li>
    </ul>
</div>
</template>

<script setup>
import {ref} from 'vue'
const menu = ref(['About Us', 'About Us Two', 'Contact Us', 'F.A.Q', 'Coming Soon', 'Not Found'])
</script>