<template>
    <div class="w-full h-full">
        <DbTop />
        <div class="flex border justify-between">
            <div class="left bg-[#FFFFFF] w-15 p-3   flex flex-col gap-y-10  border">
                <button v-for="route in routes" @click="goToRoute(route.route)"
                    :class="activeRoute === route.route ? 'text-green-500' : 'text-gray-500'" class="p-3">
                    <component :is="route.icon" />

                </button>

            </div>
            <div class="w-full h-auto">
                <slot />
            </div>
            <div class="right w-auto">
                <div class="w-full h-full bg-white">
                    <div class="w-80 h-60 bg-[#013C61] p-6 rounded items-around flex flex-col gap-y-2 ">
                        <p class="text-white mb-7">GETCHANGE WIDGET</p>
                        <div class="flex justify-between w-20 mt-4 gap-x-4 items-center">
                            <label class="text-[#FFFFFF80]">Amount</label>
                            <input type="number"
                                class=" bg-[#013C61]  w-64 text-[#FFFFFF6A] border-b-2 border-gray-400" />

                        </div>
                        <div class="flex justify-around">
                            <div class="flex items-center ">

                                <button class="rounded-full bg-[#2BDA53] w-3 h-3"></button>


                                <span class="ml-2 text-[#FFFFFF80]">Airtime</span>
                            </div>

                            <div class="flex justify-center items-center">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z"
                                        stroke="white" stroke-opacity="0.5" />
                                </svg>
                                <span class=" ml-2 text-[#FFFFFF80]">IOU Vocuher</span>
                            </div>

                        </div>
                        <p class="text-3xl text-[#FFFFFF] text-center tracking-wider font-semibold mt-8">08012345678
                        </p>

                    </div>
                    <div>
                        <div class="w-full bg-[#2BDA5333] flex justify-around items-center gap-x-4 py-2">
                            <div>C</div>
                            <div>
                                < </div>
                                    <div> > </div>
                                    <div> x </div>
                            </div>
                            <div class="flex ">
                                <div class="w-4/5 h-full flex flex-col justify-around gap-y-4 py-2">
                                    <div class="flex justify-around">

                                        <div>1</div>
                                        <div>2</div>
                                        <div>3</div>

                                    </div>
                                    <div class="flex justify-around">
                                        <div>4</div>
                                        <div>5</div>
                                        <div>6</div>

                                    </div>
                                    <div class="flex justify-around">
                                        <div>7</div>
                                        <div>8</div>
                                        <div>9</div>

                                    </div>

                                </div>
                                <div class="bg-[#2BDA5333] w-16 h-full flex flex-col items-center gap-y-4 gap-x-4">
                                    <div> * </div>
                                    <div> # </div>
                                    <div> 0</div>

                                </div>
                            </div>
                        </div>
                        <div class="gap-y-4 flex flex-col p-6">
                            <button class="bg-[#FFFFFF] rounded p-2 border">Query</button>
                            <button class="bg-[#2BDA53] p-2 border-none text-[#FFFFFF]">Generate</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>

</template>
<script setup>

import { HomeIcon, MyCardIcon, ContactIcon, CartIcon } from '@/components/Icons/Icon'
import DbTop from '@/components/DbTop.vue';
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const routes = ref(
    [
        {
            name: 'DashBoard',
            icon: HomeIcon,
            route: 'DashBoard'
        },
        {
            name: 'Cart',
            icon: CartIcon,
            route: 'Cart'
        },
        {
            name: 'Profile',
            icon: ContactIcon,
            route: 'Profile'
        },


        {
            name: 'MyCard',
            icon: MyCardIcon,
            route: 'MyCard'
        },
    ]

)
const route = useRoute();
const router = useRouter();
const activeRoute = computed(() => route.name)
const goToRoute = (name) => {
    
    if (route.name !== name) {
        router.push({ name })
    } else {
        console.log("Already on the desire route")
    }

}




</script>