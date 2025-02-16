<template>
    <div>
        <ul>
            <li v-for="item in menu" :key="item">
                {{item}}
            </li>
        </ul>
    </div>
    </template>
    
    <script setup>
    import {ref} from 'vue'
    const menu = ref(['Standard Layout', 'Grid Layout', 'List Layout', 'Single Post Layout'])
    </script>