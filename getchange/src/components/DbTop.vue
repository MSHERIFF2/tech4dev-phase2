<template>
    <div class="flex bg-white justify-between h-15 w-full ">
        <div class="w-full">
            <RouterLink to="/">
                <GetChangeIcon />
            </RouterLink>

        </div>


        <div class="flex flex-end justify-evenly  items-center  w-2/5">
            <div class="flex items-center">
                <div>
                    <CircleIcon />
                </div>

                <div class="p-3">
                    <p>{{ user }}</p>
                </div>
            </div>


            <div>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M4.99889 5.55556L10 0.00111334L0 0L4.99889 5.55556Z" fill="#013C61" />
                </svg>
            </div>


        </div>

    </div>
</template>
<script setup>
import { ref } from 'vue';


import { GetChangeIcon, CircleIcon } from './Icons/Icon';


const user = ref('Hi User')

</script>