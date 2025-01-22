<template>
     <div class="flex bg-white justify-between h-15">
            <div>
                <GetChangeIcon/>

            </div>
            <div class="flex justify-center items-center p-3 gap-x-4">
               <CircleIcon/>
                <p>{{ user }}</p>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M4.99889 5.55556L10 0.00111334L0 0L4.99889 5.55556Z" fill="#013C61" />
                </svg>
            </div>

        </div>
</template>
<script>

import {GetChangeIcon, CircleIcon } from './Icons/Icon';
export default{
    components: {GetChangeIcon, CircleIcon},
    data() {
        return {
            user: "Hi User"
        }
    }
}
</script>